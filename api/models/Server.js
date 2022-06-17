const mongoose = require('../helper/db').mongoose;
const {Schema} = mongoose;

const serverSchema = new Schema({
    server_id: {
        type: String,
        required: true
    },
    prefix: {
        type: String,
        required: true
    }
});

const Server = mongoose.model('Server', serverSchema);

module.exports = {
    Server
};