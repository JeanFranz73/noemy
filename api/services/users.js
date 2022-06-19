const { User } = require("../models/User");

function getUser(userId) {
    return User.findOne({ user_id: userId }).select('-_id').exec();
}

function getAll() {
    return User.find().select('-_id').exec();
}

function updateUser(id, user) {
    return User.findOneAndUpdate({ user_id: id }, user);
}

function saveUser(user) {
    return User.save(user);
}

function userExists(id) {
    return User.findOne({ user_id: id }).exec() !== null;
}

module.exports = {
    getUser,
    getAll,
    updateUser,
    saveUser,
    userExists
};