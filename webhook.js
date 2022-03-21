const stripe = require('stripe');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_wZUzxbZkn2nEwVEHo4V7CokcJflAFc4N";

app.use(bodyParser.json())
app.listen(4243)
app.post('/webhook', (request, response) => {
  console.log(request.body)
console.log('object');
})
