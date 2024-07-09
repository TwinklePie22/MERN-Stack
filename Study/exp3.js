const express = require('express');
const app = express();
const port = 6000;

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User with id ${id} deleted`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
