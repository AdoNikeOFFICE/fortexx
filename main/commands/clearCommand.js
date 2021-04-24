module.exports = {
    name: 'clear',
    aliases: ['c'],
    ownerOnly: true,
    callback: ({message, args}) => {
        message.channel.bulkDelete(1, true);

        if (message.author.bot) return;

        const param = parseInt(args[0]);

        if (param)
            message.channel.bulkDelete(param + 1, true);
    }

}