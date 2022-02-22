const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', [
    check('name', 'Please enter a Name').not().isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    res.clearCookie('token');
    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(200).json({ msg: 'User Already Exists' });
        } else {
            user = '';
        }
        user = new User({
            name: name,
            email: email,
            password: password
        });

        // Encrypting the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

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
            return res.status(201).json({ msg: 'success' });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   GET api/users/logout
// @desc    Logout a user
// @access  Private
router.get('/logout', async (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({ msg: 'logged out' });
});

module.exports = router;