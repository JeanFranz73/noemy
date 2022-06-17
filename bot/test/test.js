const Discord = require('discord.js');

module.exports = (client, msg) => {

    const embedMsg = new Discord.MessageEmbed()
        .setColor('#' + Math.floor(Math.random() * 16777215).toString(16))
        .setTitle("Noemy testes")
        .addField("testando", "buttons", true);

    const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('dm')
                .setLabel('Mandar DM')
                .setStyle('PRIMARY'),
        );

    msg.reply({ embeds: [embedMsg], components: [row] });
}