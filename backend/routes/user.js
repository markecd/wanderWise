const express = require('express');
const router = express.Router();
const db = require('../dbConn')

router.get('/getAll', async (req, res) => {
    const users = await db.collection('user').get();
    
    res.status(200).json(users);
})


module.exports = router;