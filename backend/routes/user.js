const express = require('express');
const router = express.Router();
const db = require('../dbConn')
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
        const { name, username, password } = req.body;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                await db.collection('user').add({
                    'name': name,
                    'username': username,
                    'password': hash
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

        const token = jwt.sign({id: userId}, secretKey, { expiresIn: '48h'});
        res.cookie('auth_token', token, {httpOnly: true, secure: false});
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

module.exports = router;