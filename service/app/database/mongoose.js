const mongoose = require('mongoose');


mongoose.connect('mongodb://mongo:27017/livro', { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;