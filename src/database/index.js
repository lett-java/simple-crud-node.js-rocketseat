const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, });
mongoose.Promise = global.Promise;

module.exports = mongoose;
