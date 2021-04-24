const discord = require("discord.js");
const config = require("./config/config.json");

const client = new discord.Client({
    partials: ["MESSAGE", "REACTION"]
});

const wokCommands = require('wokcommands');

client.login(config.TOKEN);

client.on("ready", () => {
    console.log("ForteXx Bot has been enabled.")

    client.user.setActivity("ForteXxGaming", {type: "PLAYING"});

    new wokCommands(client, {
        showWarns: true
    })
        .setDefaultPrefix("-")
        .setBotOwner("723182188182503512");
});