require("dotenv").config();

const { Client, Intents } = require('discord.js');
const commandHandler = require("./classes/commands");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.BOT_TOKEN);

client.on('ready', async () => {
    console.log("Bot ready!");
});

client.on('messageCreate', (msg) => { commandHandler(client, msg) });