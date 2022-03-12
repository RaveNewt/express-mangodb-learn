const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

(async() => {
    try {
        await client.connect();
    } catch (error) {
        console.log(error);
    }
        
})();

module.exports = client;