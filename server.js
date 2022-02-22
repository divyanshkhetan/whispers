const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();

// Connecting Database
const connectDB = require('./config/db');
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cookieParser());

// Routes 
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/messages', require('./routes/messages'));

// Serve static assets in production 
if (process.env.NODE_ENV === 'production') {

    // Set static folder
    app.use(express.static('client/out'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname + 'client' + 'out' + 'index.html')));

}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

