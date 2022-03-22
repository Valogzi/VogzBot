const { memoizer } = require('common');
const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class mpCommand extends Command {
    constructor() {
        super('mp', {
           aliases: ['mp'],
           category: 'contact',
           description: {
            content: 'La commande mp envoie un message priver de la personne selectionné !',
            usage: 'mp <@member> <message>',
            exemples: ['ceci est un message priver']
            },
           channel: 'guild',
           args: [
            { id: 'membreContact', type: 'member'},
            { id: 'messageContact', type: 'string', match: 'restContent' },
        ]
        });
    }

   async exec(message, { membreContact, messageContact }) {
        message.delete()
        // message charger dans un salon spéciffier 
        const logChannel = this.client.channels.cache.get('926901674176544848');
        // message charger dans le mp du membre 
        const logUserDM = this.client.users.cache.get(`${message.member.id}`);
        // warn commande charger au mauvais endroit
        const channelBlacklist = ['925087608575516693'];
        if (message.channel.id == channelBlacklist) return logUserDM.send(`${message.member}, vous ne pouvez pas exectutez cette commande dans ${message.channel} !`)
        // commande
        if (membreContact == message.member) return logUserDM.send(`${message.member}, Vous ne pouvez pas envoyer un message priver à vous même !`)
        if (!membreContact) return logUserDM.send(`${message.member}, Veuiller ciblé un membre pour executer cette commande!`)
        if (!messageContact) return logUserDM.send(`${message.member}, Veuiller écrire un message derrier la commande !`)
        const logUser = this.client.users.cache.get(`${membreContact.id}`);
        const embedRapMsg = new MessageEmbed()
                .setDescription(`${messageContact}`)
        if (messageContact) { await logUserDM.send({content: `Un peux de patience...
--------------------
> Bonjour ${message.member}, le message à bien été addresser à ${logUser} ! 
--------------------
Rappel de votre message:`, embeds: [embedRapMsg]})
if (membreContact) await logUser.send({content: `Oh oh...
Un message de ${message.member} vous a été adresser ! Le voici :`
, embeds: [embedRapMsg]});
await logUserDM.send(`Pour répondre, veullier executer la commande **'&mp ${message.member} <message>'** sur le serveur dans <#794591634150653952>!`)
        }
    }
    
}

module.exports = mpCommand;