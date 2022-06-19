const lang = require('./lang.json');
const en_us = require("./locales/en-us.json");
const pt_br = require("./locales/pt-br.json");
const axios = require('axios');

const guildLanguages = {};

function loadLanguages() {
    axios
        .get(process.env.API_URL + ":" + process.env.API_PORT + "/server/all", {
            headers: { Authorization: 'Bearer ' + process.env.API_AUTH }
        })
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
    const selectedLanguage = guildLanguages[server_id];

    switch (selectedLanguage) {
        case "en-us":
            return (en_us[text_id]) ? en_us[text_id] : text_id + " TEXT DOESNT EXIST!!!!!!!"
        case "pt-br":
            if (pt_br[text_id]) {
                return pt_br[text_id];
            } else {
                return (en_us[text_id]) ? en_us[text_id] : text_id + " TEXT DOESNT EXIST!!!!!!!"
            }
        default:
            return (en_us[text_id]) ? en_us[text_id] : text_id + " TEXT DOESNT EXIST!!!!!!!"
    }
}

module.exports = {
    loadLanguages: loadLanguages,
    getText: getText
}