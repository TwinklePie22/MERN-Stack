const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic GET route at /
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// POST route at /data
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  if (name && age) {
    res.send(`Hello ${name}, you are ${age} years old.`);
  } else {
    res.status(400).send('Invalid input');
  }
});

// GET route at /data/:name
app.get('/data/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
