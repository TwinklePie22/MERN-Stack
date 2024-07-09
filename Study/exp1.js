const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to my Express server!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
