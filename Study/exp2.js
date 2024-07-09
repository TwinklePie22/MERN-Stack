const express = require('express');
const app = express();
const port = 4000;

app.use(express.json()); // Middleware to parse JSON

// POST route at /data
app.post('/data', (req, res) => {
    const { name, age } = req.body;
    res.send(`Hello ${name}, you are ${age} years old.`);
});

// GET route at /data/:name
app.get('/data/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}!`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
