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
app.get('/goodbye', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Goodbye World</h1>");
});

app.get('/quote', function (req, res) {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "If you can dream it, you can achieve it."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(`Quote of the day: ${randomQuote}`);
});