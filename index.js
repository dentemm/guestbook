const express = require('express');
const mongoose = require('mongoose');

const { Comment } = require('./models/comment'); 

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

PORT = process.env.PORT || 8000;

app.listen(PORT);