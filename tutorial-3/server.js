const express = require('express');
const app = express();
const port = 3000;

// Sample user data
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// GET route at /users
app.get('/users', (req, res) => {
    res.json(users);
});

// DELETE route at /users/:id
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    
    if (users.length < initialLength) {
        res.json({ message: `User with id ${id} deleted.` });
    } else {
        res.status(404).json({ message: `User with id ${id} not found.` });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});