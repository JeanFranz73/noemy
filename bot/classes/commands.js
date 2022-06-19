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

function generate(guildId, cmds) {
    cmds.create({
        name: "ping",
        description: getText(guildId, "CMD_PING_DESCRIPTION")
    });
    cmds.create({
        name: "info",
        description: getText(guildId, "CMD_INFO_DESCRIPTION")
    });
    cmds.create({
        name: "test",
        description: getText(guildId, "CMD_TEST_DESCRIPTION")
    });
    cmds.create({
        name: "lang",
        description: getText(guildId, "CMD_LANG_DESCRIPTION"),
        options: [{
            name: "lang",
            description: getText(guildId, "CMD_LANG_LANG_DESCRIPTION"),
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        }]
    });
    cmds.create({
        name: "help",
        description: getText(guildId, "CMD_HELP_DESCRIPTION"),
        options: [{
            name: "cmd",
            description: getText(guildId, "CMD_HELP_CMD_DESCRIPTION"),
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
            generate(guildId, cmds);
        });
    }
}