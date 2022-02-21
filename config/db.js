const mongoose = require('mongoose');

const username = encodeURIComponent(`${process.env.MONGO_USERNAME}`);
const password = encodeURIComponent(`${process.env.MONGO_PASSWORD}`);
const firstDB = encodeURIComponent(`${process.env.MONGO_FIRST_DB}`);
const uri = `mongodb+srv://${username}:${password}@cluster0.n34i1.mongodb.net/${firstDB}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;