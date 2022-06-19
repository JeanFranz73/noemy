const { Server } = require('../models/Server');

function getServer(id) {
    return Server.findOne({ server_id: id }).select('-_id').exec();
}

function getAll() {
    return Server.find().select('-_id').exec();
}

function updateServer(id, server) {
    return Server.findOneAndUpdate({ server_id: id }, server);
}

function saveServer(server) {
    return Server.save(server);
}

function serverExists(id) {
    return Server.findOne({ server_id: id }).exec() !== null;
}

module.exports = {
    getServer,
    getAll,
    updateServer,
    saveServer,
    serverExists
};