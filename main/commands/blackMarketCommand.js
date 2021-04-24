const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'blackmarket',
    aliases: ['bm'],
    callback: ({client, message, args}) => {
        message.channel.bulkDelete(1, true);

        if (message.author.bot) return;
        if (message.channel.id !== "834384688138158100") return;

        if (!args[0]) {
            const wrongUsageEmbed = new MessageEmbed();

            wrongUsageEmbed.setColor("RED");
            wrongUsageEmbed.setTitle("⛔ Oops.. Wrong usage!");
            wrongUsageEmbed.setDescription("Please type in a valid command. \n **Usage:** \n `-blackmarket|bm [text]`");

            return message.channel.send(wrongUsageEmbed);
        } else {
            const text = args.join(" ");

            const blackMarketEmbed = new MessageEmbed();

            blackMarketEmbed.setColor("NOT_QUITE_BLACK");
            blackMarketEmbed.setTitle("ForteXxGaming - BlackMarket");
            blackMarketEmbed.setDescription("`" + text + "`");
            blackMarketEmbed.setFooter("ForteXxGaming | Coded by AdoNikeOFFICE (discord.gg/g9B5fsc2yd) | " + new Date().toLocaleDateString());

            message.channel.send(blackMarketEmbed);

            if (message.channel.id !== "834483752905867325") {
                const blackMarketLogEmbed = new MessageEmbed();

                blackMarketLogEmbed.setColor("NOT_QUITE_BLACK");
                blackMarketLogEmbed.setTitle("ForteXxGaming - BlackMarket");
                blackMarketLogEmbed.setDescription("**Someone typed something to BlackMarket..** \n `" + text + "` \n Author: " + message.author.toString());
                blackMarketLogEmbed.setFooter("ForteXxGaming | Coded by AdoNikeOFFICE | " + new Date().toLocaleDateString());

                return client.channels.cache.get("834483752905867325").send(blackMarketLogEmbed);
            }

        }

    }

}