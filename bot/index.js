require("dotenv").config();

const { Client, Intents } = require('discord.js');
const commandHandler = require("./classes/commands");
const buttonHandler = require("./classes/buttons");
const { loadLanguages } = require("./lang/language");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

client.login(process.env.BOT_TOKEN);

client.on('ready', async () => {
    console.log("Bot ready!");
    commandHandler.createCommands(client);
    loadLanguages();
});


client.on('interactionCreate', (interaction) => {
    if (interaction.isCommand()) {
        commandHandler.handleInteraction(client, interaction)
    }
    if (interaction.isButton()) {
        buttonHandler(client, interaction)
    }
});

client.on('guildCreate', (guild) => {
    commandHandler.createCommands(client);
});