const { MongoClient } = require('mongodb');

async function main() {
    // Connection URI
    const uri = "mongodb://localhost:27017";
    
    // Create a new MongoClient
    const client = new MongoClient(uri);
    
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to server");

        // Connect to the 'mydatabase' database
        const database = client.db('mydatabase');

        // Create or get the 'Employee' collection
        const collection = database.collection('Employee');

        // Insert a sample document to create the collection
        const sampleDocument = { name: "VKS", age: 20 };
        await collection.insertOne(sampleDocument);
        console.log("Collection 'Employee' created with sample document");

    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        // Close the connection to the MongoDB server
        await client.close();
    }
}

// Run the main function
main().catch(console.error);
