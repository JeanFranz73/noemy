const {User} = require("../models/User");

function getUser(userId) {
    return User.findOne({user_id: userId}).select('-_id').exec();
}

function updateUser(id, user) {
    return User.updateOne({user_id: id}, user);
}

module.exports = {
    getUser,
    updateUser,
};