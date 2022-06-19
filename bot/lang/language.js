const lang = require('./lang.json');
const axios = require('axios');

const guildLanguages = {};

function loadLanguages() {
    axios
        .get(process.env.API_URL + ":" + process.env.API_PORT + "/server/all")
        .then(res => {
            res.data.forEach(server => {
                const { server_id, language } = server;
                guildLanguages[server_id] = language;
            });
        })
        .catch(error => {
            console.error(error);
        });
}

function getText(server_id, text_id) {
    if (!lang.translations[text_id]) {
        throw new Error(`Unknown text ID "${text_id}"`)
    }
    const selectedLanguage = guildLanguages[server_id];

    return lang.translations[text_id][selectedLanguage]
}

module.exports = {
    loadLanguages: loadLanguages,
    getText: getText
}