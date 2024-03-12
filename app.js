const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimiter = require('express-rate-limit');
const router = require('./src/routes/api'); // Import API routes

require('dotenv').config();
const app = express();

// Enable CORS
app.use(cors());

// Implement security measures
app.use(helmet()); // Helmet helps secure Express apps by setting various HTTP headers
app.use(hpp()); // Protects against HTTP Parameter Pollution attacks
app.use(express.json({ limit: '20MB' })); // Parse JSON bodies (with a size limit of 20MB)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
const limiter = rateLimiter({ windowMs: 15 * 60 * 1000, max: 3000 }); // Implement rate limiting
app.use(limiter);

// Connect to MongoDB database using Mongoose
const URL = `${process.env.DATABASE_NAME}`;
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true };
mongoose.connect(URL, OPTIONS)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });

// Implement API routes
app.use('/api', router);

// 404 Not Found route
app.use('*', (req, res) => {
    res.status(404).json({ status: 'fail', message: '404 Not Found' });
});

module.exports = app;
