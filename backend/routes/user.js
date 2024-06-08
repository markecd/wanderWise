const express = require('express');
const router = express.Router();
const { db, bucket } = require('../dbConn')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'secret-key'; //TO DO enviornment variable
const saltRounds = 10;

router.get('/getAll', async (req, res) => {
    try {
        const usersSnapshot = await db.collection('user').get();
        const users = usersSnapshot.docs.map(doc => doc.data());

        res.status(200).json(users);
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Error getting users");
    }
});

router.get('/getIdByUsername', async(req, res) => {
    try{
        const {username} = req.query;

        const docSnapshot = await db.collection('user').where('username', '==', username).get();

        if (docSnapshot.docs.map(doc => doc.data()).length == 0) {
            console.log("noooo")
            res.status(404).json("Username ne obstaja");
            return
        } else{
            res.status(200).json(docSnapshot.docs[0].id)
            console.log(docSnapshot.docs[0].id) 
        }

    }
    catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Error getting users");
    }
})

router.post('/usernameExists', async (req, res) => {
    try {
        const username = req.body.username;

        const usernameSnapshot = await db.collection('user').where('username', '==', username).get();

        if (usernameSnapshot.docs.map(doc => doc.data()).length == 0) {
            res.status(200).json(0);
        }
        else {
            res.status(409).json(1);
        }
    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.post('/registerUser', async (req, res) => {
    try {
        const { name, username, password, email } = req.body;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                await db.collection('user').add({
                    'name': name,
                    'username': username,
                    'password': hash,
                    'email': email
                })

                res.status(200).json("user was inserted");
            })
        })
    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.get('/getUsernameById', async (req, res) => {
    try{
        const {userId} = req.query;
        const snapshotUser = await db.collection('user').doc(userId).get();
        const userData = snapshotUser.data();
        const userUsernameObj = {id: userId, username: userData.username}
        res.status(200).json(userUsernameObj)
    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.get('/getUserData', async (req, res) => {
    try {
        const { userId } = req.query;

        const snapshotUser = await db.collection('user').doc(userId).get();
        const userData = snapshotUser.data();
        const plansRef = db.collection('plans').where('userid', '==', userId);
        const followersRef = db.collection('user').doc(userId).collection('followers');
        const followingRef = db.collection('user').doc(userId).collection('following');

        const followersSnapshot = await followersRef.get();
        const followingSnapshot = await followingRef.get();
        const plansSnapshot = await plansRef.get();

        const steviloFollowerjevUserja = followersSnapshot.size;
        const steviloFollowingovUserja = followingSnapshot.size;
        const steviloPlanovUserja = plansSnapshot.size;

        const data = {
            name: userData.name,
            username: userData.username,
			bio: userData.bio,
            followersNumber: steviloFollowerjevUserja,
            followingNumber: steviloFollowingovUserja,
            userPlansNumber: steviloPlanovUserja
        }
        res.status(200).json(data);

    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

/*router.get('/getUsername/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userDoc = await db.collection('user').doc(id).get();

        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userData = userDoc.data();
        const username = userData.username; 
        
        res.status(200).json({ username });
    } catch (error) {
        console.error("Error fetching username: ", error);
        res.status(500).json({ message: "Internal Server Error", error: error.toString() });
    }
});*/

router.delete('/followUser', async (req, res) => {
    try {
        const { userId } = req.query;
        const webToken = req.cookies.auth_token
        let followerId;

        jwt.verify(webToken, secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).send("Invalid token");
            }

            followerId = decoded.id;
        });

        const userRef = db.collection('user').doc(userId);
        const followerRef = userRef.collection('followers').doc(followerId);
        const followingRef = db.collection('user').doc(followerId).collection('following').doc(userId);

        await db.runTransaction(async (transaction) => {
            transaction.delete(followerRef);
            transaction.delete(followingRef);
        });

        res.status(200).send("Unfollowed successfully");

    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.post('/followUser', async (req, res) => {
    try {
        const { userId } = req.query;
        const webToken = req.cookies.auth_token
        let followerId;

        jwt.verify(webToken, secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).send("Invalid token");
            }

            followerId = decoded.id;
        });

        const userRef = db.collection('user').doc(userId);
        const followerDocRef = db.collection('user').doc(followerId);
        const followerRef = userRef.collection('followers').doc(followerId);
        const followingRef = db.collection('user').doc(followerId).collection('following').doc(userId);

        const userDocSnapshot = await userRef.get();
        const followerDocSnapshot = await followerDocRef.get();

        const userData = userDocSnapshot.data();
        const followerData = followerDocSnapshot.data();


        await db.runTransaction(async (transaction) => {
            transaction.set(followerRef, {
                followerId: followerId,
                followerUsername: followerData.username,
                email : followerData.email
            });
            transaction.set(followingRef, {
                followingId: userId,
                followingUsername: userData.username
            });
        });

        res.status(200).send("followed success");

    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.post('/registerUser', async (req, res) => {
    try {
        const { name, username, password, email } = req.body;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                await db.collection('user').add({
                    'name': name,
                    'username': username,
                    'password': hash,
                    'email': email
                })

                res.status(200).json("user was inserted");
            })
        })
    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.post('/loginUser', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!(await usernameCheck(username))) {
            res.status(404).json({ message: "Username doesn't exist" });
            return;
        }

        let isCorrectPassword = await passwordCheck(username, password);

        if (!isCorrectPassword) {
            res.status(404).json({ message: "Password is incorrect" });
            return;
        }

        const snapshot = await db.collection('user').where('username', '==', username).get();
        const userId = snapshot.docs[0].id;

        const token = jwt.sign({ id: userId }, secretKey, { expiresIn: '48h' });
        res.cookie('auth_token', token, { httpOnly: true, secure: false });
        res.status(200).json("prijava uspešna");
    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

async function usernameCheck(username) {
    const usernameSnapshot = await db.collection('user').where('username', '==', username).get();

    if (usernameSnapshot.docs.map(doc => doc.data()).length !== 0) {
        return true;
    }
    else {
        return false;
    }
}

async function passwordCheck(username, password) {
    const snapshot = await db.collection('user').where('username', '==', username).get();

    if (snapshot.empty) {
        console.log('No matching documents.');
        return false;
    }

    let hashedPassword = '';

    snapshot.forEach(doc => {
        const data = doc.data();
        hashedPassword = data['password'];
    });

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    })
}

router.get('/isFollowing', async (req, res) => {
    try {
        const webToken = req.cookies.auth_token
        let followerId;
        const { userId } = req.query;

        jwt.verify(webToken, secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).send("Invalid token");
            }

            followerId = decoded.id;
        });

        const isFollowing = await checkIfFollowing(userId, followerId);
        res.status(200).json({ isFollowing });

    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

async function checkIfFollowing(followingId, followerId) {
    const followingRef = db.collection('user').doc(followerId).collection('following').doc(followingId);
    const doc = await followingRef.get();
    return doc.exists;
}

router.get('/getUserIdAuth', async (req, res) => {
    try {
        const webToken = req.cookies.auth_token

        jwt.verify(webToken, secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).send("Invalid token");
            }

            const userId = decoded.id;
            res.status(200).json(userId);
        });
    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.post('/loginUser', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!(await usernameCheck(username))) {
            res.status(404).json({ message: "Username doesn't exist" });
            return;
        }

        let isCorrectPassword = await passwordCheck(username, password);

        if (!isCorrectPassword) {
            res.status(404).json({ message: "Password is incorrect" });
            return;
        }

        const snapshot = await db.collection('user').where('username', '==', username).get();
        const userId = snapshot.docs[0].id;


        const token = jwt.sign({ id: userId }, secretKey, { expiresIn: '48h' });
        res.cookie('auth_token', token, { httpOnly: true, secure: false });
        res.status(200).json("Login successful!");
    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

router.post('/logoutUser', (req, res) => {
	res.clearCookie('auth_token', { httpOnly: true, secure: false});
	res.status(200).send("Logout successful.");
});

router.put('/updateBio', async (req, res) => {
  try {
    const { userId } = req.query;
    const { bio } = req.body;

    await db.collection('user').doc(userId).update({ bio });

    const updatedUserDoc = await db.collection('user').doc(userId).get();
    console.log("Updated user data:", updatedUserDoc.data());
	
    res.status(200).json("Bio updated successfully");
  } catch (error) {
    console.error("Error updating bio: ", error);
    res.status(500).send("Error updating bio");
  }
});


module.exports = router;