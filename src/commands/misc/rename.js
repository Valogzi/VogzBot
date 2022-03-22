const { memoizer } = require('common');
const { Command } = require('discord-akairo');
const { MessageEmbed, Channel } = require('discord.js');

class renameDisplayNameCommand extends Command {
    constructor() {
        super('rename', {
           aliases: ['rename'],
           category: 'Misc',
           description: {
            content: 'La commande rename modifie votre pseudo de serveur!',
            usage: 'rename <newName> | &rename reset',
            exemples: ['rename @valogzi Les patate douce']
            },
           channel: 'guild',
           args: [
            { id: 'rename', type: 'string', match: 'restContent' },
        ],
        });
    }

   async exec(message, { rename }) {
       message.delete()
       const logChannel = this.client.channels.cache.get(`794577466911621141`);
       const logUserDM = this.client.users.cache.get(`${message.member.id}`);
       
       if (!rename) return logUserDM.send(`${message.member}, veuiller entrer une chaine de caractaire derrier la commande !`)
       if (message.member.id === '702856445573464107') return logUserDM.send(`${message.member}, je ne peut pas modifié votre pseudo ! Je n'est pas les permissions pour cela !`)
       if (rename === 'reset') return message.member.setNickname(null)
       if (rename) await message.member.setNickname(rename)
       if (rename) return logUserDM.send(`GG ${message.member} ! Ton pseudo sur le serveur de **Valogzi** est maintenant : *${rename}*
Pour le reinitialiser tu peut maintenant taper \`!rename reset\``)
    }
    
}

module.exports = renameDisplayNameCommand;