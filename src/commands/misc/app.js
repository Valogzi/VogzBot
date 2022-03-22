const { timeStamp } = require('console');
const { Command } = require('discord-akairo');
const wait = require('util').promisify(setTimeout);
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { embed } = require('../../util/functions');

class appreciationCommand extends Command {
    constructor() {
        super('ap', {
            aliases: ['ap'],
            category: 'En développement',
            description: {
                content: 'rien par là',
                usage: 'ici non plus',
                exemples: ['toujours pas', 'encore moin']
            },
            channel: 'guild',
            
        });
    }
    
    
    async exec(interaction) {
      interaction.delete();
      const logChannel = this.client.channels.cache.get('950098803409682452')
     try {
      const filter1 = i => i.customId === 'A' && i.user.id === '702856445573464107';
      const collector = interaction.channel.createMessageComponentCollector({ filter1, time: 6000 });
      const embedOK = new MessageEmbed()
              .setAuthor('Success')
              .setDescription('Your feedback has been recorded\nFor view your appreciation went at <#950098803409682452>')
              .setColor('GREEN')

              const embedstand = new MessageEmbed()
              .setAuthor('Ticket Closed')
              .setDescription('Please rate the quality of service received with the buttons below\n\n⚠️ **You have 6 seconds to answer !**')
              .setColor('GREEN')

        const button = new MessageActionRow() 
            .addComponents(
            new MessageButton()
            .setCustomId('A')
            .setEmoji('⭐')
            .setLabel(`1`)
            .setStyle('DANGER')
              )
            .addComponents(
              new MessageButton()
              .setCustomId('B')
              .setEmoji('⭐')
              .setLabel(`2`)
              .setStyle('DANGER')
               )
            .addComponents(
              new MessageButton()
              .setCustomId('C')
              .setEmoji('⭐')
              .setLabel(`3`)
              .setStyle('PRIMARY')
               )
               .addComponents(
                new MessageButton()
                .setCustomId('D')
                .setEmoji('⭐')
                .setLabel(`4`)
                .setStyle('SUCCESS')
                  )
                  .addComponents(
                    new MessageButton()
                    .setCustomId('E')
                    .setEmoji('⭐')
                    .setLabel(`5`)
                    .setStyle('SUCCESS')
                      )
              
        const logUserDM = this.client.users.cache.get(interaction.author.id)


        collector.on('collect', async i => {
          try {
          if (i.customId === 'A') {
            await i.reply({ components: [], embeds: [embedOK], ephemeral: true });
            await logChannel.send(`**${interaction.author.username}**, merci de votre avis sur le système du bot de ce serveur !\nRappel de votre appréciation: \`⭐1\`\nUtilisé nous fait avancer !`)
          }
          if (i.customId === 'B') {
            await i.reply({ components: [], embeds: [embedOK], ephemeral: true });
            await logChannel.send(`**${interaction.author.username}**, merci de votre avis sur le système du bot de ce serveur !\nRappel de votre appréciation: \`⭐2\`\nUtilisé nous fait avancer !`)
          }
          if (i.customId === 'C') {
            await i.reply({ components: [], embeds: [embedOK], ephemeral: true });
            await logChannel.send(`**${interaction.author.username}**, merci de votre avis sur le système du bot de ce serveur !\nRappel de votre appréciation: \`⭐3\`\nUtilisé nous fait avancer !`)
          }
          if (i.customId === 'D') {
            await i.reply({ components: [], embeds: [embedOK], ephemeral: true });
            await logChannel.send(`**${interaction.author.username}**, merci de votre avis sur le système du bot de ce serveur !\nRappel de votre appréciation: \`⭐4\`\nUtilisé nous fait avancer !`)
          }
          if (i.customId === 'E') {
            await i.reply({ components: [], embeds: [embedOK], ephemeral: true });
            await logChannel.send(`**${interaction.author.username}**, merci de votre avis sur le système du bot de ce serveur !\nRappel de votre appréciation: \`⭐5\`\nUtilisé nous fait avancer !`)
          }
        } catch (err) { 
            console.log(err)
        }
        });



      interaction.channel.send({embeds: [embedstand], components: [button]}).then(async m => { setTimeout(() => m.delete(), 6000)})      
     } catch (err) {
       console.log(err)
     }
            } 
    }
module.exports = appreciationCommand;