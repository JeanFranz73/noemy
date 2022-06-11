const mongoose = require('../helper/db').mongoose;
const {Schema} = mongoose;


const userSchema = new Schema({
    user_id: String,
    money: Number,
    exp: Number,
    profile: {
        type: Map,
        of: new Schema({
            bio: String,
            socialMedias: {
                type: Map,
                of: String
            }
        })
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};