var pjson = require('../../../package.json');
const ping = require("ping");
const Discord = require('discord.js');

module.exports = (client, interaction) => {

    const embedMsg = new Discord.MessageEmbed()
        .setColor('#' + Math.floor(Math.random() * 16777215).toString(16))
        .setTitle("Noemy info")
        .addField("RAM", process.memoryUsage().heapUsed / 1024 / 1024 + " MB", true)
        .addField("Tempo", process.uptime() + "s", true)
        .addField("Versão", pjson.version, true)
        .addField("Versão Node", process.version, true);

    interaction.reply({
        embeds: [embedMsg]
    });
}