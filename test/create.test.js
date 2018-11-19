const axios = require('axios');
const uuid = require('uuid');
require('dotenv').config({ path: '../.env' })

/*
const getUrl = process.env.GET_URL;
axios.get(getUrl)
  .then((resp) => {
    // resp.status === 200
    // resp.data !== [], null, or undefined
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  })
*/


const postUrl = process.env.CREATE_URL;
const item = {
  id: uuid.v1(),
  name: 'tester',
  feedback: 'feedback test',
};

axios.post(postUrl, item, {
  headers: {
    'x-api-key': process.env.API_KEY_VALUE
  }
})
  .then((resp) => {
    // resp.status === 200
    // resp.data === item
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  })
