const {Server} = require('../models/Server');

function getServer(id) {
    return Server.findOne({server_id: id}).select('-_id').exec();
}

function saveServer(server) {
    return Server.save(server);
}

module.exports = {
    getServer,
    saveServer
};