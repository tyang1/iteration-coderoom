const mongoose = require('mongoose');
mongoose.connect('mongodb://tk:tk1234@ds060649.mlab.com:60649/coderoomerino');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('we are connected!');
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    level: Number,
    totalTime: Number,
    createdAt: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

