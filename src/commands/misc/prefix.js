const { Command } = require('discord-akairo');

class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
           aliases: ['prefix'],
           category: 'Admin',
           description: {
            content: 'La commande prefix modifie le prefix du bot !',
            usage: 'prefix <NewPrefix>',
            exemples: ['prefix', 'prefix &']
            }, 
            ownerOnly: true,
           channel: 'guild',
           args: [{ id: 'newPrefix', type: 'string' }]
        });
    }

    async exec(message, args) {
       if (!args.newPrefix) return message.reply({content: `Prefix actuel -> \`${this.handler.prefix}\``, ephemeral: true});
    }
}

module.exports = PrefixCommand;