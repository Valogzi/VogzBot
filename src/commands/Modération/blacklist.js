const { Command } = require('discord-akairo');

class blacklistCommand extends Command {
    constructor() {
        super('blacklist', {
           aliases: ['blacklist', 'bl'],
           category: 'Modération',
           description: {
            content: 'La commande blacklist sert à ajouter un id dans la blacklist (ou regarder les id déjà présent dans la blacklist)!',
            usage: 'blacklist <user|guild|user|global> {add|rm} <idToBlacklist>',
            subCommand: 'add|rm',
            exemples: ['blacklist guild', 'blacklist', 'bl channel add 13829128941792']
            },
           channel: 'guild',
           args: [
               { id: 'target', type: 'string' },
               { id: 'action', type: 'string' },
               { id: 'idToBlacklist', type: 'string' },
           ],
           clientPermissions: ['KICK_MEMBERS'],
           userPermissions: ['KICK_MEMBERS']
        });
    }

    async exec(message, { target, action, idToBlacklist }) {
     
    }
}

module.exports = blacklistCommand;