
const { MongoClient, ServerApiVersion } = require('mongodb');
const username = encodeURIComponent(`${process.env.MONGO_USERNAME}`);
const password = encodeURIComponent(`${process.env.MONGO_PASSWORD}`);
const firstDB = encodeURIComponent(`${process.env.MONGO_FIRST_DB}`);
const uri = `mongodb+srv://${username}:${password}@cluster0.n34i1.mongodb.net/${firstDB}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
