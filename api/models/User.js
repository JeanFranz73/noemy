const mongoose = require('../helper/db').mongoose;

const userSchema = {
    user_id: {
        type: String,
        required: true
    },
    exp: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    money: {
        type: Number,
        required: true
    },
    minecraft_nick: {
        type: String,
        required: false
    }
};

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}