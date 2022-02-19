const express = require('express');
const router = express.Router();

// @route   GET api/messages
// @desc    Get all messages that you received
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all messages that you received');
});

// @route   POST api/messages
// @desc    Post a message to a user
// @access  Public
router.post('/', (req, res) => {
    res.send('Sent a message to the owner');
});

module.exports = router;