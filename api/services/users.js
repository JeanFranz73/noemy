const {User} = require("../models/User");

function getUser(userId) {
    return User.findOne({user_id: userId}).select('-_id').exec();
}

function saveUser(user) {
    return User.save(user);
}

module.exports = {
    getUser,
    saveUser
};