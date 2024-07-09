const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

const books = [
  { title: 'Book 1', author: 'Author A', category: 'Fiction' },
  { title: 'Book 2', author: 'Author B', category: 'Non-fiction' },
  { title: 'Book 3', author: 'Author C', category: 'Science' }
];

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
  if (err) {
    return console.error('Error occurred while connecting to MongoDB:', err);
  }
  
  console.log('Connected successfully to MongoDB server');
  const db = client.db(dbName);
  
  db.collection('books').insertMany(books, function(err, result) {
    if (err) {
      return console.error('Error occurred while inserting documents:', err);
    }
    
    console.log('Documents inserted successfully:', result.insertedCount);
    client.close();
  });
});
