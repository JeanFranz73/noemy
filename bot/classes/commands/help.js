const Discord = require('discord.js');

const h = {
    lang: "Changes Noemy language.",
    info: "Shows Noemy informations.",
    ping: "Checks if Noemy is alive."
}

module.exports = async (client, interaction) => {

    const { options } = interaction;
    const cmd = options.getString("cmd");
    console.log("cmd> " + cmd);
    if (cmd == null) {
        const embedMsg = new Discord.MessageEmbed()
            .setColor('#' + Math.floor(Math.random() * 16777215).toString(16))
            .setTitle("Noemy help")
            .addField("help", "All bot commands.", true)
            .addField("help <cmd>", "Help for specific command.", true)
            .addField("lang <cmd>", "Changes Noemy language.", true)
            .addField("ping", "Checks if Noemy is alive.", true)
            .addField("info", "Shows Noemy informations.", true);

        interaction.reply({
            embeds: [embedMsg]
        });
    } else {

        if (!h[cmd]) {
            interaction.reply({
                content: cmd + " is not supported!"
            });
        } else {

            const embedMsg = new Discord.MessageEmbed()
                .setColor('#' + Math.floor(Math.random() * 16777215).toString(16))
                .setTitle("Noemy help")
                .addField(cmd, h[cmd], true);

            interaction.reply({
                embeds: [embedMsg]
            });
        }
    }
}