const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const database = "e-commerence";
const client = new MongoClient(url);
async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("products");
}
module.exports = dbConnect;