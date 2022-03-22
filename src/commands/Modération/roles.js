const { Command } = require('discord-akairo');
const wait = require('util').promisify(setTimeout);
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

class rolesCommand extends Command {
    constructor() {
        super('roles', {
            aliases: ['roles'],
            category: 'Modération',
            description: {
                content: 'La commande roles permet de modifié un role classique ou administratif par le billet de plusieur boutton !',
                usage: 'roles <member>',
                exemples: ['roles @exemple']
            },
            channel: 'guild',
            args: [
                { id: 'member', type: 'member' }
            ],
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['ADMINISTRATOR']
        });
    }
    
    
    async exec(interaction, { member }) {
        interaction.delete()
        const collector = interaction.channel.createMessageComponentCollector();
        // interaction.delete()
        const Nv1Warn = 'niveau 1'
        const Nv2Warn = 'niveau 2'
        const Nv3Warn = 'niveau 3'

        const embeds1 = new MessageEmbed()
              .setAuthor('Tous les rôles de type classique :')
              .setDescription('• 📌| Notifs\n• 🎥| Annonce évents\n• 🔨| Discussion évents\n• 🔆| Boosters & VIP')
              const embeds2 = new MessageEmbed()
              .setAuthor('Tous les rôles de type classique :')
              .setDescription('• 👑 · Responsable\n• -- Administration --\n• 🚀 · Modération | Discord\n')
   
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
              .setCustomId('D')
              .setEmoji('⚙️')
              .setLabel(`Manage roles`)
              .setStyle('SECONDARY')
              
        );
        const confirmManage = new MessageActionRow()
        .addComponents(
            new MessageButton()
              .setCustomId('K')
              .setEmoji('⚙️')
              .setLabel(`Manage roles classic`)
              .setStyle('SECONDARY')
              
        )
        .addComponents(
          new MessageButton()
            .setCustomId('Z')
            .setEmoji('⚙️')
            .setLabel(`Manage roles administration`)
            .setStyle('SECONDARY')
            
      );
      const confirmSupprOrajouter = new MessageActionRow()
        .addComponents(
            new MessageButton()
              .setCustomId('P')
              .setEmoji('➕')
              .setLabel(`ajouter`)
              .setStyle('SECONDARY')
              
        )
        .addComponents(
          new MessageButton()
            .setCustomId('O')
            .setEmoji('➖')
            .setLabel(`supprimer`)
            .setStyle('SECONDARY')
            
      )
      .addComponents(
        new MessageButton()
          .setCustomId('2')
          .setEmoji('◀️')
          .setLabel(`Retour`)
          .setStyle('DANGER')
          
      );
      const confirmSupprOrajouter1 = new MessageActionRow()
        .addComponents(
            new MessageButton()
              .setCustomId('PP')
              .setEmoji('➕')
              .setLabel(`ajouter`)
              .setStyle('SECONDARY')
              
        )
        .addComponents(
          new MessageButton()
            .setCustomId('OO')
            .setEmoji('➖')
            .setLabel(`supprimer`)
            .setStyle('SECONDARY')
            
      )
      .addComponents(
        new MessageButton()
          .setCustomId('1')
          .setEmoji('◀️')
          .setLabel(`Retour`)
          .setStyle('DANGER')
          
      );
        const WarnRemove = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('E')
            .setEmoji('📌')
            .setLabel(`Notifs`)
            .setStyle('SECONDARY')
            
        )
        .addComponents(
            new MessageButton()
              .setCustomId('F')
              .setEmoji('🎥')
              .setLabel(`Annonce évents`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('G')
              .setEmoji('🔨')
              .setLabel(`Discussion évents`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('L')
              .setEmoji('🔆')
              .setLabel(`Boosters & VIP`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('H')
              .setEmoji('◀️')
              .setLabel(`Retour`)
              .setStyle('DANGER')
              
          )
          const WarnRemove1 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('EE')
            .setEmoji('📌')
            .setLabel(`Notifs`)
            .setStyle('SECONDARY')
            
        )
        .addComponents(
            new MessageButton()
              .setCustomId('FF')
              .setEmoji('🎥')
              .setLabel(`Annonce évents`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('GG')
              .setEmoji('🔨')
              .setLabel(`Discussion évents`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('LL')
              .setEmoji('🔆')
              .setLabel(`Boosters & VIP`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('HH')
              .setEmoji('◀️')
              .setLabel(`Retour`)
              .setStyle('DANGER')
              
          )
          const WarnRemove2 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('11')
            .setEmoji('👑')
            .setLabel(`Responsable`)
            .setStyle('SECONDARY')
            
        )
        .addComponents(
            new MessageButton()
              .setCustomId('12')
              .setEmoji('⚙️')
              .setLabel(`-- Administration --`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('13')
              .setEmoji('🚀')
              .setLabel(`Modération | Discord`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('15')
              .setEmoji('◀️')
              .setLabel(`Retour`)
              .setStyle('DANGER')
              
          )
          const WarnRemove3 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('111')
            .setEmoji('👑')
            .setLabel(`Responsable`)
            .setStyle('SECONDARY')
            
        )
        .addComponents(
            new MessageButton()
              .setCustomId('122')
              .setEmoji('⚙️')
              .setLabel(`-- Administration --`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('133')
              .setEmoji('🚀')
              .setLabel(`Modération | Discord`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('155')
              .setEmoji('◀️')
              .setLabel(`Retour`)
              .setStyle('DANGER')
              
          )


        collector.on('collect', async i => {
            if (i.customId === 'D') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Voulez vous acceder au menue de rôles de ${member} ?`, components: [confirmManage]})
                }
            }
            if (i.customId === 'E') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez ajouter le role Notif à ${member}`, components: []})
                    await member.roles.add('794640423280312330')
                }
            }
            if (i.customId === 'EE') {
              if (member) {
                  await i.reply({ephemeral: true, content: `Vous avez supprimer le role Notif à ${member}`, components: []})
                  await member.roles.remove('794640423280312330')
              }
          }
            if (i.customId === 'FF') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez supprimer le rôle Annonce évents à ${member}`, components: []})
                    await member.roles.remove('795237503258460160')
                }
            }
            if (i.customId === 'F') {
              if (member) {
                  await i.reply({ephemeral: true, content: `Vous avez ajouter le rôle Annonce évents à ${member}`, components: []})
                  await member.roles.add('795237503258460160')
              }
          }
            if (i.customId === 'G') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez ajouter le role Discussion évents à ${member}`, components: []})
                    await member.roles.add('795238887646822420')
                }
            }
            if (i.customId === 'GG') {
              if (member) {
                  await i.reply({ephemeral: true, content: `Vous avez supprimer le role Discussion évents à ${member}`, components: []})
                  await member.roles.remove('795238887646822420')
              }
          }
          if (i.customId === 'L') {
            if (member) {
                await i.reply({ephemeral: true, content: `Vous avez ajouter le VIP/Booster évents à ${member}`, components: []})
                await member.roles.add('794622653221699625')
            }
        }
        if (i.customId === 'LL') {
          if (member) {
              await i.reply({ephemeral: true, content: `Vous avez supprimer le role VIP/Booster à ${member}`, components: []})
              await member.roles.remove('794622653221699625')
          }
      }
            if (i.customId === 'H') {
                if (member) {
                    await i.update({content: `Tu veux supprimer ou ajouter des rôles à ${member}`, components: [confirmSupprOrajouter], embeds: []})
                }
            }
            if (i.customId === '1') {
              if (member) {
                  await i.update({ephemeral: true, content: `Voulez vous acceder au menue de rôles de ${member} ?`, components: [confirmManage]})
              }
          }
          if (i.customId === '2') {
            if (member) {
                await i.update({ephemeral: true, content: `Voulez vous acceder au menue de rôles de ${member} ?`, components: [confirmManage]})
            }
        }
            if (i.customId === 'HH') {
              if (member) {
                  await i.update({content: `Tu veux supprimer ou ajouter des rôles à ${member}`, components: [confirmSupprOrajouter], embeds: []})
              }
          }
            if (i.customId === 'K') {
              if (member) {
                  await i.update({content: `Tu veux supprimer ou ajouter des rôles à ${member}`, components: [confirmSupprOrajouter]})
              }
          }
          if (i.customId === 'Z') {
            if (member) {
                await i.update({content: `Tu veux supprimer ou ajouter des rôles à ${member}`, components: [confirmSupprOrajouter1]})
            }
        }
        if (i.customId === 'P') {
          if (member) {
              await i.update({content: './Manage/Classic/plus/choice', embeds: [embeds1], components: [WarnRemove]})
          }
      }
      if (i.customId === 'O') {
        if (member) {
            await i.update({content: './Manage/classic/moin/choice', embeds: [embeds1], components: [WarnRemove1]})
        }
    }
    if (i.customId === 'PP') {
      if (member) {
          await i.update({content: './Manage/admin/plus/choice', embeds: [embeds2], components: [WarnRemove2]})
      }
  }
  if (i.customId === 'OO') {
    if (member) {
        await i.update({content: './Manage/admin/moin/choice', embeds: [embeds2], components: [WarnRemove3]})
    }
} 
if (i.customId === '11') {
  if (member) {
      await i.reply({ephemeral: true, content: `Vous avez ajouter le rôle Responsable à ${member}`, components: []})
      await member.roles.add('794610418600378398')
  }
}
if (i.customId === '12') {
  if (member) {
      await i.reply({ephemeral: true, content: `Vous avez ajouter le rôle Administrateur à ${member}`, components: []})
      await member.roles.add('794611275233624066')
  }
}
if (i.customId === '13') {
  if (member) {
      await i.reply({ephemeral: true, content: `Vous avez ajouter le rôle Modérateur discord à ${member}`, components: []})
      await member.roles.add('794609986365685761')
  }
}
if (i.customId === '15') {
  if (member) {
      await i.update({ephemeral: true, content: `Tu veux supprimer ou ajouter des rôles à ${member}`, components: [confirmSupprOrajouter1], embeds: []})
  }
}
if (i.customId === '111') {
  if (member) {
      await i.reply({ephemeral: true, content: `Vous avez supprimer le rôle Responsable à ${member}`, components: []})
      await member.roles.remove('794610418600378398')
  }
}
if (i.customId === '122') {
  if (member) {
      await i.reply({ephemeral: true, content: `Vous avez supprimer le rôle Administrateur à ${member}`, components: []})
      await member.roles.remove('794611275233624066')
  }
}
if (i.customId === '133') {
  if (member) {
      await i.reply({ephemeral: true, content: `Vous avez supprimer le rôle Modérateur discord à ${member}`, components: []})
      await member.roles.remove('794609986365685761')
  }
}
if (i.customId === '155') {
  if (member) {
      await i.update({ephemeral: true, content: `Tu veux supprimer ou ajouter des rôles à ${member}`, components: [confirmSupprOrajouter1], embeds: []})
  }
}
          });
       if (member) {
           await interaction.channel.send({content: 'Voici un petit menu pas piqué des haneton pour gérer les rôles des membres de ce serveur !', components: [row]}).then(i => { setTimeout(() => i.delete(), 5000)})
       } else interaction.channel.send(`Veuillez ciblé un membre!`).then(i => { setTimeout(() => i.delete(), 1000)})

            } 
    }

module.exports = rolesCommand;