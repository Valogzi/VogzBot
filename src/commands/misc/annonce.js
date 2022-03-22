const { memoizer } = require('common');
const { Command } = require('discord-akairo');
const { MessageEmbed, Channel } = require('discord.js');

class AnnonceCommand extends Command {
    constructor() {
        super('Annonce', {
           aliases: ['annonce'],
           category: 'Admin',
           description: {
            content: 'La commande annonce envois le message écris dans le salon que vous désigner !',
            usage: 'annonce <channel> <Annonce>',
            exemples: ['annonce <#188939172901029082> ceci est une annonce']
            },
           channel: 'guild',
           args: [
            { id: 'channel', type: 'channel' },
            { id: 'infoAnnonce', type: 'string', match: 'restContent' },
        ],
        userPermissions: ['BAN_MEMBERS']
        });
    }

   async exec(message, { channel, infoAnnonce }) {
        try {

       message.delete()
        const logChannel = this.client.channels.cache.get(channel.id);
        const logUserDM = this.client.users.cache.get(`${message.member.id}`);
        if (!infoAnnonce) return logUserDM.send(`${message.member}, veuiller entrer une chaine de caractaire derrier la commande !`)
        if (!this.userPermissions) return  logUserDM.send(`${message.member}, vous n'avez pas la permission pour executer cette commande !`)
          await logChannel.send(`${infoAnnonce}`)
        } catch (err) {
            console.log(err),
            message.channel.send('Veuiller entrer un salon textuel !').then(async mess => setTimeout(async () => { mess.delete() }, 5000))
        }
    }
    
}

module.exports = AnnonceCommand;