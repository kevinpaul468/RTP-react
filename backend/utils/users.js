const MongoClient = require("mongodb").MongoClient;
const databaseURL = 'mongodb://localhost:27017';
const database = 'backend_masters';

const client = new MongoClient(databaseURL);

async function emailExists(email) {
    await client.connect();
    const db = await client.db(database);
    const collection = await db.collection("user_details");
    const document = await collection.findOne({ email: email });
    if (document === null) {
        return false;
    }
    return true;
}


async function addEmail(name,email, password) {
    await client.connect();
    const db = await client.db(database);
    const collection = await db.collection("user_details");
    const document = await collection.insertOne({ name: name, email: email, password: password });
    console.log("inserted sucessfully");
    return;
}


async function verified(email, password) {
    await client.connect();
    const db = await client.db(database);
    const collection = await db.collection("user_details");
    const document = await collection.findOne({email: email});
    if(document.password === password){
        return true;
    }
    return false;
}

module.exports = { emailExists, addEmail, verified };