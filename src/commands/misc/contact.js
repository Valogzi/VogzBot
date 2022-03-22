const { memoizer } = require('common');
const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class contactCommand extends Command {
    constructor() {
        super('contact', {
           aliases: ['contact'],
           category: 'contact',
           description: {
            content: 'La commande banFac te mets dans la fille d\'attente de la faction!',
            usage: 'banFac <Annonce> <annonce>',
            exemples: ['contact ceci est une annonce']
            },
           channel: 'guild',
           args: [
            { id: 'contact', type: 'string', match: 'restContent' },
        ]
        });
    }

   async exec(message, { contact }) {
        message.delete()
        // message charger dans un salon spéciffier 
        const logChannel = this.client.channels.cache.get('926901674176544848');
        // message charger dans le mp du membre 
        const logUserDM = this.client.users.cache.get(`${message.member.id}`);
        // warn commande charger au mauvais endroit
        const channelBlacklist = ['925087608575516693'];
        if (message.channel.id == channelBlacklist) return logUserDM.send(`${message.member}, vous ne pouvez pas exectutez cette commande dans ${message.channel} !`)
        const embedRapMsg = new MessageEmbed()
            .setDescription(`${contact}`)
        // commande
        if (contact) await logChannel.send({content: `Message adresser au <@&925499930737516657> de ${message.member} :`, embeds: [embedRapMsg]})
        if (!contact) await logUserDM.send(`${message.member}, Veuiller écrire un message derrier la commande !`)
        if (contact) await logUserDM.send({content: `Un peux de patience...
--------------------
> Bonjour ${message.member}, le message à bien été addresser au staff ! 
> Un membre du staff va bientôt vous répondre !
--------------------
Rappel de votre message:`, embeds: [embedRapMsg]})

    }
    
}

module.exports = contactCommand;