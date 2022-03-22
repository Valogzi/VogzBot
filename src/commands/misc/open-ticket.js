const { Command } = require('discord-akairo');
const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

class interactionCreate extends Command {
  constructor() {
    super('ticket', {
      name: 'ticket',
       aliases: ['ticket'],
       category: 'ticket',
       description: {
        content: 'La commande ticket vous ouvre un ticket d\'aide!',
        usage: 'ticket',
        exemples: ['ticket']
        },
       channel: 'guild',
       emitter: 'guild',
       event: 'channelCreate',
    });
}

 async exec(message) {
  message.delete()
  const guild = this.client.guilds.cache.get('794575292973973506')
  const logUserDM = this.client.users.cache.get(`${message.member.id}`);
  const logChannel = this.client.channels.cache.get(`919981441826291733`)

const embed = new MessageEmbed()
  .setColor('GREEN')
  .setAuthor('❓ Contacter un Modérateur')
  .setDescription(`Un problème sur le serveur ?
Section réservée aux demandes qui nécessitent un Modérateur.
    
⚠️ *Tout ticket inutile sera* ***sanctionné.***`);

const ticket = new MessageEmbed()
  .setColor('#2f3136')
  .setAuthor('❓ Contacter un Modérateur')
  .setDescription(`t'es toujours là ? les modos sont près !
Pour fermer le ticket veuiller executer la commande \`!close\``);
if (message.channel.parentId == '794587271515996197') {

    if (guild.channels.cache.find((c) => c.topic === message.member.id)) return logUserDM.send(`${message.member}, vous avez déjà un ticket d'ouvert !`);
    const channel = await guild.channels.create(`ticket-${message.author.username}`, {
      type: 'GUILD_TEXT', 
      permissionOverwrites: [
        {
          id: message.member.id, 
          allow: [Permissions.FLAGS.VIEW_CHANNEL]
        }, 
        {
          id: guild.roles.everyone.id,
          deny: [Permissions.FLAGS.VIEW_CHANNEL]
        },
        {
          id: guild.roles.cache.get('794609986365685761'), 
          allow: [Permissions.FLAGS.VIEW_CHANNEL]
        }
      ],
      topic: message.member.id,
      parent: guild.channels.cache.get('794587271515996197')
    });
      
    logChannel.send({embeds: [new MessageEmbed()
      .setColor('NOT_QUITE_BLACK')
      .setAuthor('Logs tickets :')
      .setDescription(`**${message.author.username}** à ouvert un ticket ! (${channel})`)
      .setTimestamp()]})
    channel.send({ content: `${guild.roles.cache.get('794609986365685761')}, **${message.author.username}** à ouvert un ticket !`, embeds: [ticket]})
    logUserDM.send(`${message.member}, votre ticket a été ouvert ! (${channel})`);
      } else {
        return logUserDM.send(`${message.member}, Vous ne pouvez pas executer cette commande dans ${message.channel} !
Cette commande peut être utiliser uniquement dans <#943193864074829834>`)
      }

      
    }
  }


module.exports = interactionCreate;