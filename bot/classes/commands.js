require("dotenv").config();

const commands = {
    ping: function (client, msg, args) {
        var channel = client.channels.cache.get(msg.channel.id);
        channel.send("pong UwU");
    }
}

module.exports = function (client, msg) {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === "!") {

        command = command.substring(1);
        if (command.split(" ").length > 1) {
            command = command.split(" ")[0];
            command = command.replace(" ", "");
        }
        console.log("command> " + command);
        try {
            commands[command](client, msg, tokens);
        } catch (error) {
            console.log(error);
        }

    }
}