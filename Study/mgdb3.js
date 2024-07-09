const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
  if (err) {
    return console.error('Error occurred while connecting to MongoDB:', err);
  }
  
  console.log('Connected successfully to MongoDB server');
  const db = client.db(dbName);
  
  db.collection('products').find({ category: 'Electronics' }).toArray(function(err, result) {
    if (err) {
      return console.error('Error occurred while querying documents:', err);
    }
    
    console.log('Documents found:');
    console.log(result);
    client.close();
  });
});
