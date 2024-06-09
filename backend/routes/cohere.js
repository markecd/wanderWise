const express = require('express');
const router = express.Router();
//const { db, bucket } = require('../dbConn');
const { CohereClient } = require('cohere-ai');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const apiKey = process.env.COHERE_API_KEY;

const cohere = new CohereClient({
  token: apiKey,
});



router.get('/getGeneratedPlan', async (req, res) => {
  try{
    const {destinationName} = req.query;
    
    const response = await cohere.chat({
      message: `For ${destinationName} or somewhere nearby make a fun trip plan. You need to fill the fields in given json object with that trip data and plan_description should briefly describe the chosen geopoints. Make the response a JSON object, WITHOUT ANY ADDITIONAL TEXT OR DESCRIPTION!`+
      "{"+
        "plan_name: *Paris awesome trip*,"+
        "plan_description: *Paris rolls out some great...*,"+
        "starting_point: {"+
            "latitude: *48.944940*,"+ 
            "longitude: *2.354061*,"+
        "},"+
        "end_point: {"+
            "latitude: *49.113325*,"+ 
            "longitude: *2.210882*,"+
        "},"+
        "intermediate_points: [{latitude: 49.028563, longitude: 2.062002}]," +
    "}",
    })

    console.log(response.text)
    res.status(200).json(response.text)

  }catch (error) {
    console.error("Error getting generated plan: ", error);
    res.status(500).send("Error getting users");
}
})
 

module.exports = router;



