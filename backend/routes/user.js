const express = require('express');
const router = express.Router();
var knex = require('../dbConn.js');

router.get('/getAll', async (req, res) => {
    const users = await knex('user')

    res.status(200).json(users);
})


module.exports = router;