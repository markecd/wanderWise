const { CohereClient } = require('cohere-ai');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const apiKey = process.env.COHERE_API_KEY;


const cohere = new CohereClient({
  token: apiKey,
});

(async () => {
  const response = await cohere.chat({
    message: 'Write me a JSON object that has dog name, owner name and an array of his dog friends names. Dont include anything but the json object in the response also without this: ```json at the start of the object and this ``` at the end',
  });


  console.log(response.text)
  

 
})();



