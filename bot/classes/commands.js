require("dotenv").config();

const info = require('./commands/info')
const test = require('../test/test');

const commands = {
    ping: function (client, interaction) {
        interaction.reply({
            content: "pong UwU"
        });
    },
    info: function (client, interaction) {
        info(client, interaction);
    },
    test: function name(client, interaction) {
        test(client, interaction);
    }
}

function generate(cmds) {
    cmds.create({
        name: "ping",
        description: "pong"
    });
    cmds.create({
        name: "info",
        description: "Mostra as informações do bot."
    });
    cmds.create({
        name: "test",
        description: "Testando funcionalidade dos btns."
    });
}

module.exports = {
    handleInteraction: function (client, interaction) {
        const { commandName } = interaction;

        commands[commandName](client, interaction);

    },

    createCommands: function (client) {
        const guilds = client.guilds.cache.map(guild => guild.id);
        guilds.forEach(guildId => {
            const guild = client.guilds.cache.get(guildId);
            let cmds;

            cmds = (guild) ? guild.commands : client.application.commands;
            generate(cmds);
        });
    }
}