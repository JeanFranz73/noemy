require("dotenv").config();
const DiscordJS = require('discord.js');
const info = require('./commands/info')
const test = require('../test/test');
const lang = require('./commands/lang');
const help = require("./commands/help");
const { getText } = require('../lang/language');


const commands = {
    ping: function (client, interaction) {
        interaction.reply({
            content: getText(interaction.guildId, "PING")
        });
    },
    info: function (client, interaction) {
        info(client, interaction);
    },
    test: function (client, interaction) {
        test(client, interaction);
    },
    lang: function (client, interaction) {
        lang(client, interaction);
    },
    help: function (client, interaction) {
        help(client, interaction);
    }
}

function generate(cmds) {
    cmds.create({
        name: "ping",
        description: "pong"
    });
    cmds.create({
        name: "info",
        description: "Shows bot information."
    });
    cmds.create({
        name: "test",
        description: "Testing stuff."
    });
    cmds.create({
        name: "lang",
        description: "Set bot language.",
        options: [{
            name: "lang",
            description: "Desired language.",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        }]
    });
    cmds.create({
        name: "help",
        description: "All bot commands.",
        options: [{
            name: "cmd",
            description: "Help for specific command.",
            required: false,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        }]
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