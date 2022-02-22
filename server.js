const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');


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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

