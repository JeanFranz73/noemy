
module.exports = async function (client, btn) {
    switch (btn.customId) {
        case "dm":
            client.users.fetch(btn.user.id, false).then((user) => {
                user.send(':3');
                btn.reply({content: 'msg enviada', ephemeral: true  });
               });
            break;
        default:
            break;
    }
}