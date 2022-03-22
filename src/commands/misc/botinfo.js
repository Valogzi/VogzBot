const { Command } = require('discord-akairo');

class botInfoCommand extends Command {
    constructor() {
        super('botinfo', {
           aliases: ['botinfo'],
           category: 'Misc',
           description: {
            content: 'La commande botinfo renvois les infos sur le bot!',
            usage: 'botinfo',
            exemples: ['botinfo']
            },
           channel: 'guild',
        });
    }

    exec(message, args) {
        const bot = this.client;
        const nonBotUsers = this.client.users.cache.filter(u => !u.bot);
        

       return message.channel.send({ embeds: [
           bot.functions.embed()
           .setAuthor(bot.user.username, bot.user.displayAvatarURL()) 
            .setDescription(`Bot créé entièrement en **JavaScript** par [Valogzi™](https://twitter.com/vValoGzi)
            `)
            .setFooter(`🔒 ${message.id}`)
       ]})
    }
}

module.exports = botInfoCommand;