const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
// Middleware to parse JSON bodies
app.use(express.json());

// 1. Set up MongoDB connection
mongoose.connect('mongodb://localhost:27017/mylibrary', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// 2. Define schema for the Book collection
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  publishedYear: Number
});

// 3. Create model based on schema
const Book = mongoose.model('Book', bookSchema);

// 4. Implement API endpoint to create a new book
app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });