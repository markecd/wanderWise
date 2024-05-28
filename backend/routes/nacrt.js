const express = require('express');
const router = express.Router();
const db = require('../dbConn')

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

router.post('/createPlan', async(req,res) => {
    
    try {
        const { destinationId, planName, planDescription, startingPoint, endPoint, intermediatePoints, userId } = req.body;

     
                await db.collection('plans').add({
                    'destinationid': destinationId,
                    'plan_name': planName,
                    'plan_description': planDescription,
                    'starting_point': startingPoint,
                    'end_point': endPoint,
                    'userid': userId,
                    'intermediate_points': intermediatePoints
                })

                res.status(200).json("plan was inserted");

    }
    catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
})

module.exports = router;