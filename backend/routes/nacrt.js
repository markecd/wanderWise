const express = require('express');
const router = express.Router();
const { db, bucket } = require('../dbConn')
const { v4: uuidv4 } = require('uuid');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const admin = require('firebase-admin');
const apiKey = process.env.API_KEY;




router.get('/getNacrti', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        throw new Error('Ni ID-ja destinacije')
    }

    try {
        const snapshot = await db.collection('plans')
            .where('destinationid', '==', id)
            .get();

        const nacrti = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(nacrti);

    }
    catch (error) {
        console.error("Error pri pridobivanju nacrtov: ", error);
        res.status(500).send("Error pri pridobivanju nacrtov");
    }
})



router.post('/createPlan', async (req, res) => {
    try {
        let { destinationId, planName, planDescription, startingPoint, endPoint, intermediatePoints, userId } = req.body;

        
    

 
        await db.collection('plans').add({

            destinationid: destinationId,
            plan_name: planName,
            plan_description: planDescription,
            starting_point: {
                latitude: startingPoint.latitude,
                longitude: startingPoint.longitude
            },
            end_point: {
                latitude: endPoint.latitude,
                longitude: endPoint.longitude
            },
            intermediate_points: intermediatePoints.map(point => ({
                latitude: point.latitude,
                longitude: point.longitude
            })),
            userid: userId
        });

        res.status(200).json({ message: "Plan was inserted" });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ message: "Error creating plan" }); 
    }
});




router.get('/getNacrtiByUser', async (req, res) => {
    const { id } = req.query;

    if (!id) {
        throw new Error('Ni ID-ja userja')
    }

    try {
        const snapshot = await db.collection('plans')
            .where('userid', '==', id)
            .get();

        const nacrti = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(nacrti);

    }
    catch (error) {
        console.error("Error pri pridobivanju nacrtov: ", error);
        res.status(500).send("Error pri pridobivanju nacrtov");
    }
})



router.get('/getPlanById', async (req, res) => {
    try {
        const { planId } = req.query;
        const snapshot = await db.collection('plans').doc(planId).get();
        res.status(200).json(snapshot.data())
    } catch (error) {
        console.error("Error pri pridobivanju nacrtov: ", error);
        res.status(500).send("Error pri pridobivanju nacrtov");
    }
})

router.get('/mapData', async (req, res) => {
    try {
        const { start, end, intermediate } = req.query;
        const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&waypoints=optimize:true|${intermediate}&key=${apiKey}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching directions' });
    }
})


router.post('/upload/:planId', async (req, res) => {
    try {
        const url = await uploadImage(req.file, req.params.planId);
        res.status(200).send({ url });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/likeComment', async (req, res) => {
    try {
        const { commentId } = req.query;
        const { userId, planId } = req.body;

        console.log("PlanId:", planId);
        console.log("CommentId:", commentId);
        console.log("UserId:", userId);

        if (!commentId || !userId || !planId) {
            throw new Error('Missing required parameters');
        }

        const commentRef = db.collection('plans').doc(planId).collection('messages').doc(commentId);
        const commentDoc = await commentRef.get();

        if (!commentDoc.exists) {
            throw new Error('Comment not found');
        }

        let likedUsers = commentDoc.data().liked_users || [];
        console.log("Existing liked_users:", likedUsers);
        console.log("UserId to add:", userId);
        console.log("Type of userId:", typeof userId);

      
        if (!Array.isArray(likedUsers)) {
            throw new Error('liked_users must be an array');
        }

        if (likedUsers.includes(userId)) {
            likedUsers = likedUsers.filter(user => user !== userId);
            await commentRef.update({
                liked_users: likedUsers
            });
            res.status(200).json({ message: 'Comment unliked successfully' });
        } else {
            likedUsers.push(userId);
            await commentRef.update({
                liked_users: likedUsers
            });
            res.status(200).json({ message: 'Comment liked successfully' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message || 'Something went wrong' });
    }
});


router.post('/createComment', async (req, res) => {
    try {
        const { planId } = req.query;
        const { content, userId, time } = req.body;

        console.log(planId);

        const newComment = {
            content: content,
            liked_users: [],
            time: new Date(time),
            userid: userId
        };

        await db.collection('plans').doc(planId).collection('messages').add(newComment);

        res.status(200).send({ message: 'Comment added successfully' });
    } catch (error) {
        console.error('Error adding comment: ', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

router.get('/getComments', async (req, res) => {
    try {
        const { planId } = req.query;

        const messagesSnapshot = await db.collection('plans').doc(planId).collection('messages').orderBy('time', 'desc').get();
        const comments = messagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error getting comments: ', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

const uploadImage = async (file, planId) => {
    const fileName = `${uuidv4()}_${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    const blobStream = fileUpload.createWriteStream({
        metadata: {
            contentType: file.mimetype,
        }
    });

    return new Promise((resolve, reject) => {
        blobStream.on('error', (error) => {
            reject('Something is wrong! Unable to upload at the moment.');
        });

        blobStream.on('finish', async () => {
            const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
            try {
                await db.collection('plans').doc(planId).update({
                    plan_images: firebase.firestore.FieldValue.arrayUnion(url)
                });
                resolve(url);
            } catch (error) {
                reject(error);
            }
        });

        blobStream.end(file.buffer);
    })
}


module.exports = router;