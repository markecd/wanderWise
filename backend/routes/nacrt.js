const express = require('express');
const router = express.Router();
const { db, bucket } = require('../dbConn')
const { v4: uuidv4 } = require('uuid');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const apiKey = process.env.API_KEY;




router.get('/getNacrti', async (req,res) => {
    const {id} = req.query;

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

router.get('/getNacrtiByUser', async (req,res) => {
    const {id} = req.query;

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
    try{
        const {planId} = req.query;
        const snapshot = await db.collection('plans').doc(planId).get();
        res.status(200).json(snapshot.data())
    }catch (error) {
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
            try{
                await db.collection('plans').doc(planId).update({
                    plan_images: firebase.firestore.FieldValue.arrayUnion(url)
                });
                resolve(url);
            } catch(error){
                reject(error);
            }
        });

        blobStream.end(file.buffer);
    })
}

router.post('/createPlan', async(req,res) => {
    
    try {
        const { name, description, starting_point, end_point } = req.body;

     
                await db.collection('plans').add({
                    'plan_name': name,
                    'plan_description': description,
                    'starting_point': starting_point,
                    'end_point': end_point
                })

                res.status(200).json("plan was inserted");

    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

module.exports = router;