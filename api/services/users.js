const {User} = require('../model/User');

function getUser(userId) {
    return User.findOne({user_id: userId}).select('-_id').exec();
}

module.exports = {
    getUser
};