const mongoose = require('../helper/db').mongoose;
const {Schema} = mongoose;

const userSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        required: true
    },
    exp: {
        type: Number,
        required: true
    },
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}