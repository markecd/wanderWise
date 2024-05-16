const express = require('express');
const router = express.Router();
const db = require('../dbConn')

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


module.exports = router;