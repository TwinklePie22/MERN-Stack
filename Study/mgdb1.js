const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
  if (err) {
    return console.error('Error occurred while connecting to MongoDB:', err);
  }
  
  console.log('Connected successfully to MongoDB server');
  const db = client.db(dbName);
  
  db.collection('users').insertOne({
    name: 'John Doe',
    age: 30
  }, function(err, result) {
    if (err) {
      return console.error('Error occurred while inserting document:', err);
    }
    
    console.log('Document inserted successfully');
    client.close();
  });
});
