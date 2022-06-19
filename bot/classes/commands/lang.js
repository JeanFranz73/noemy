const { getText, loadLanguages } = require("../../lang/language")
const lang = require("../../lang/lang.json")
const axios = require('axios');


module.exports = async (client, interaction) => {
    const { options } = interaction;
    const l = options.getString("lang");
    var languageIsAvaiable = false;
    await lang.languages.forEach(language => {
        console.log(language + " == " + l);
        if (language == l) {
            languageIsAvaiable = true;
        }
    });
    if (!languageIsAvaiable) {
        interaction.reply({
            content: "Language " + l + " is not supported!"
        });
    } else {
        axios
            .patch(process.env.API_URL + ":" + process.env.API_PORT + "/server/" + interaction.guildId, {
                language: l
            }, {
                headers: { Authorization: 'Bearer ' + process.env.API_AUTH }
            })
            .then(res => {
                loadLanguages();
                interaction.reply({
                    content: getText(interaction.guildId, "LANG_SET") + " " + l
                });
            })
            .catch(error => {
                console.log(error);
                interaction.reply({
                    content: error.response.data.message
                });
            });
    }


}