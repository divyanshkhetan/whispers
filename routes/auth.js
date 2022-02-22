const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

// Middlewares
const auth = require('../middleware/auth');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(201).json({ msg: "authenticated", user: user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth
// @desc    Auth user and get Token
// @access  Public
router.post('/', [
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(200).json({ msg: "Invalid Credentials" });
        }

        // Matching Password with database password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(200).json({ msg: 'Invalid Credentials' });
        }

        // Generating token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: 604800
        }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV !== "development", maxAge: 7 * 24 * 60 * 60 * 1000 });
            return res.status(200).json({ msg: 'success' });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error');
    }
});


module.exports = router;