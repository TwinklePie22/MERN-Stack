const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello World</h1>");
});

app.listen(3000)
console.log("connected");

app.get('/random', function (req, res) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  res.send(`Your random number is: ${randomNum}`);
});

app.get('/time', function (req, res) {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`Current time is: ${currentTime}`);
});

app.get('/greet/:name', function (req, res) {
  const name = req.params.name;
  res.send(`Hello, ${name}! Welcome to our site.`);
});
