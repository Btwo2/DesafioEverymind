require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

let singleton;

async function connect() {
    if (singleton) return singleton;

    const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();

    singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}

async function findAll() {
    const db = await connect();
    return db.collection("customers").find().toArray();
}

async function insert(costumer){
	const db = await connect();
	return db.collection("customers").insertOne(costumer)
}

async function deleteOne(id) {
    const db = await connect();
    return db.collection("customers").deleteOne({ _id: new ObjectId(id) });
}

async function findOne(id) {
    const db = await connect();
    return db.collection("customers").findOne({_id: new ObjectId(id)});
}

async function update(id, customer) {
    const db = await connect();
    return db.collection("customers").updateOne({ _id: new ObjectId(id) }, { $set: customer });
}

module.exports = { findAll, insert, findOne, deleteOne, update}