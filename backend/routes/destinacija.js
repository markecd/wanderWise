const express = require('express');
const router = express.Router();
const db = require('../dbConn')

router.get('/getAll', async (req, res) => {
    try {
        const destinacijaSnapshot = await db.collection('destinations').get();
        const destinacije = destinacijaSnapshot.docs.map(doc => doc.data());

        res.status(200).json(destinacije);
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Error getting users");
    }
});








module.exports = router;