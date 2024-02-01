const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const response = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.send(response);
});

app.post('/login', (req, res) => {
  const user = req.body.userName;
  if (user) {
    res.send(`Welcome ${(user)}`);
  }
  res.status(401).send();
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
