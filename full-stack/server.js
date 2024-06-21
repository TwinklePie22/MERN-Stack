const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Backend Express server!' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});