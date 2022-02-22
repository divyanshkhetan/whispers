const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Message = require('../models/Message');

// @route   GET api/messages
// @desc    Get all messages that you received
// @access  Private
router.get('/:id', auth, async (req, res) => {

    try {
        const messages = await Message.find({ user: req.params.id }).sort({ date: -1 });
        // console.log(messages);
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// @route   POST api/messages
// @desc    Post a message to a user
// @access  Public
router.post('/', [
    check('message', 'A message is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
    }

    const { message, userid } = req.body;

    try {
        const newMessage = new Message({
            user: userid,
            message: message
        });

        const anonymousMessage = await newMessage.save();
        res.json(anonymousMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/messages
// @desc    Delete a message that you received
// @access  Private

router.delete('/:id', auth, async (req, res) => {
    try {
        let message = await Message.findById(req.params.id);

        if (!message) {
            return res.status(200).json({ msg: 'Message not found' });
        }

        if (message.user.toString() !== req.user.id) {
            return res.status(200).json({ msg: 'Not authorized' });
        }

        await Message.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Message deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;