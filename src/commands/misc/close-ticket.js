const { Command } = require('discord-akairo');
const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

class closeCreate extends Command {
  constructor() {
    super('close', {
       aliases: ['close'],
       category: 'ticket',
       description: {
        content: 'La commande close ferme un potentiel ticket ouvert !',
        usage: 'close',
        exemples: ['close']
        },
       channel: 'guild',
       emitter: 'guild',
       event: 'channelCreate',
       args: [
         { id: 'supp', type: 'string' }
       ]
    });
}

 async exec(interaction) {
  const filter1 = i => i.customId === 'A' && i.user.id === '702856445573464107';
  const collector = interaction.channel.createMessageComponentCollector({ filter1, time: 150000 });
  const filter2 = i => i.customId === 'B' && i.user.id === '702856445573464107';
  const collector2 = interaction.channel.createMessageComponentCollector({ filter2, time: 150000 });
  interaction.delete()
    const logChannel = this.client.channels.cache.get(`919981441826291733`)
    const guild = this.client.guilds.cache.get('794575292973973506')
    const logUserDM = this.client.users.cache.get(`${interaction.member.id}`);
    if (interaction.channel.id == '943193864074829834') return logUserDM.send(`${interaction.member}, Vous ne pouvez pas executer cette commande dans ${interaction.channel} !
Cette commande peut être utiliser uniquement dans un ticket ouvert !`)
const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setCustomId('A')
              .setEmoji('🔨')
              .setLabel(`Fermer`)
              .setStyle('SUCCESS')
          )
          .addComponents(
            new MessageButton()
              .setCustomId('B')
              .setLabel(`Cancel`)
              .setStyle('DANGER')
          );
          collector.on('collect', async i => {
            if (i.customId === 'A') {
                interaction.channel.delete()
                logChannel.send({embeds: [new MessageEmbed()
                  .setColor('NOT_QUITE_BLACK')
                  .setAuthor('Logs tickets :')
                  .setDescription(`**${interaction.author.username}** à fermer un ticket !`)
                  .setTimestamp()]})
            }
          });
          collector2.on('collect', async i => {
            if (i.customId === 'B') {
              await i.deferUpdate()
              await i.deleteReply()
              await i.followUp({content: `Aucun souci! Tu peux continuer à parler dans ce salon!`, ephemeral: true})
            }
          });

          if (interaction.channel.parentId == '794587271515996197') {
         await interaction.channel.send({content: 'Veux tu vraiment fermer ce ticket?', components: [row]});
        } else {
          return logUserDM.send(`${interaction.member}, Vous ne pouvez pas executer cette commande dans ${interaction.channel} !
Cette commande peut être utiliser uniquement dans un ticket ouvert !`)
      }
    }
  }


module.exports = closeCreate;