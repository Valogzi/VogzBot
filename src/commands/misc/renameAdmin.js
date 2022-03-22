const { memoizer } = require('common');
const { Command } = require('discord-akairo');
const { MessageEmbed, Channel } = require('discord.js');

class renameDisplayALLCommand extends Command {
    constructor() {
        super('renameAdmin', {
           aliases: ['renameAdmin'],
           category: 'Admin',
           description: {
            content: 'La commande renameAdmin permet de modifié nimporte quelle pseudo sur le serveur !',
            usage: 'renameAdmin <@member> <newName> | renameAdmin <@member> reset',
            exemples: ['renameAdmin @valogzi Les patate douce']
            },
           channel: 'guild',
           ownerOnly: true,
           args: [
            { id: 'membreSelec', type: 'member', default: message => message.member  },
            { id: 'rename', type: 'string', match: 'restContent', limit: 33 },
        ],
        });
    }

   async exec(message, { membreSelec, rename }) {
       message.delete()
       const logChannel = this.client.channels.cache.get(`794577466911621141`);
       const logUserDM = this.client.users.cache.get(`${message.member.id}`);
       
       
       
    //    if (rename = '!' ) return logUserDM.send(`Le caractaire \`!\` ne peut pas être admis à ${membreSelec} comme pseudo.`)
       if (!rename) return logUserDM.send(`${message.member}, veuiller entrer une chaine de caractaire derrier la commande !`)
       if (!membreSelec) return logUserDM.send(`${message.member}, veuiller enter un pseudo pour en modifié un`)
       if (membreSelec.id === '702856445573464107') return logUserDM.send(`${message.member}, je ne peut pas modifié le pseudo du créateur ! Je n'est pas les permissions pour cela !`)
       if (rename === 'reset') {
           await logUserDM.send(`${message.member}, le pseudo de ${membreSelec} à bien été réinitialisé !`)
           return membreSelec.setNickname(null)
        }
        if (rename) await membreSelec.setNickname(rename)
        if (membreSelec === message.member) return logUserDM.send(`GG ${message.member} ! Ton pseudo sur le serveur de **Valogzi** est maintenant : *${rename}*`)
        if (rename) return logUserDM.send(`GG ${message.member} ! Le pseudo de ${membreSelec} sur le serveur de **Valogzi** est maintenant : *${rename}*`)
    }
    
}

module.exports = renameDisplayALLCommand;