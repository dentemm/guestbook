const mongoose = require('mongoose');

const Comment = mongoose.model('Comment', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    company: {
        type: String,
        required: false,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
    }
})

module.exports = { Comment }
