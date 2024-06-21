const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my Express server! ');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the about page. Write all about you here.');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com (any mail id)');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});