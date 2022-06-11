var pjson = require('../../package.json');
const ping = require("ping");
const Discord = require('discord.js');

module.exports = (client, msg) => {

    const embedMsg = new Discord.MessageEmbed()
        .setColor('#' + Math.floor(Math.random() * 16777215).toString(16))
        .setTitle("Noemy info")
        .addField("RAM", process.memoryUsage().heapUsed / 1024 / 1024 + " MB", true)
        .addField("Tempo", process.uptime() + "s", true)
        .addField("Versão", pjson.version, true)
        .addField("Versão Node", process.version, true);

    var channel = client.channels.cache.get(msg.channel.id);
    channel.send({ embeds: [embedMsg] });
}