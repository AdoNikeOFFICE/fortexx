const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'blackmarketinfo',
    aliases: ['bmi'],
    permissions: ['ADMINISTRATOR'],
    callback: ({message}) => {
        message.channel.bulkDelete(1, true);

        if (message.author.bot) return;
        if (message.channel.id !== "834384688138158100") return;

        const infoEmbed = new MessageEmbed();

        infoEmbed.setColor("GREEN");
        infoEmbed.setTitle("📄 Info..");
        infoEmbed.setDescription("Please type in ⬇️. \n `-blackmarket|bm [text]` \n To use this BlackMarket Chat.");

        return message.channel.send(infoEmbed);
    }

}