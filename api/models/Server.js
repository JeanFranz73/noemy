const mongoose = require('../helper/db').mongoose;
const {Schema} = mongoose;

const serverSchema = {
    server_id: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }
};

const Server = mongoose.model('Server', serverSchema);

module.exports = {
    Server
};