const { Command } = require('discord-akairo');

class ServeurInfoCommand extends Command {
    constructor() {
        super('serveurInfo', {
           aliases: ['serveurInfo', 'servInfo'],
           category: 'Misc',
           description: {
            content: 'La commande serveurInfo renvois les infos sur le serveur!',
            usage: 'serveurInfo',
            exemples: ['serveurInfo']
            },
           channel: 'guild',
        });
    }

     async exec(message, args) {
        const guild = message.guild;
        const owner = await guild.fetchOwner();
 
       return message.channel.send({ embeds: [
           this.client.functions.embed()
           .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL()) 
            .setDescription(`Fondateur: ${owner.displayName} (${owner.id})
            Créé le: ${guild.createdAt}
            Utilisateurs: ${guild.memberCount}
            Salons: ${guild.channels.cache.size}
            Roles: ${guild.roles.cache.size}`)
       ]})
    }
}

module.exports = ServeurInfoCommand;