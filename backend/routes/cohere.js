const express = require('express');
const router = express.Router();
const { db, bucket } = require('../dbConn');
const { CohereClient } = require('cohere-ai');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const apiKey = process.env.COHERE_API_KEY;

const cohere = new CohereClient({
  token: apiKey,
});





/*
(async () => {
  const response = await cohere.chat({
    message: `For ${destination.name} or somewhere nearby make a fun trip for destination id put: ${destination.id}, for userid put: ${destination.userid.concat("","13")} just write any data you want that would make sense in this context, make the response a json object, without any additonal text`+
    "{"+
      "plan_name: planData.plan_name,"+
      "plan_description: planData.plan_description,"+
      "destionationid: planData.destinationid,"+
      "userid: planData.userid,"+
      "starting_point: {"+
          "latitude: planData.starting_point.latitude,"+
          "longitude: planData.starting_point.longitude"+
      "},"+
      "end_point: {"+
          "latitude: planData.end_point.latitude,"+
          "longitude: planData.end_point.longitude,"+
      "},"+
      "intermediate_points: intermediate," +
      "date_from: dateFrom,"+
      "date_to: dateTo,"+
  "}",
  });



  console.log(response.text)
  
})();
*/

module.exports = router;



