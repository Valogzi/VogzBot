const { Command } = require('discord-akairo');
const wait = require('util').promisify(setTimeout);
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

class BanCommand extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            category: 'Modération',
            description: {
                content: 'La commande ban explulse l\'utilisateur choisis dans la commande!',
                usage: 'ban <member> <raison>',
                exemples: ['ban @exemple', 'ban @exemple Trop d\'émoji']
            },
            channel: 'guild',
            args: [
                { id: 'member', type: 'member' },
                { id: 'reason', type: 'string', match: 'restContent' },
            ],
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS']
        });
    }
    
    
    async exec(interaction, { member, reason }) {

      try {



      interaction.delete()
      if (reason == null) reason = 'Raison non définie !'
        const filter1 = i => i.customId === 'A' && i.user.id === '702856445573464107';
        const collector = interaction.channel.createMessageComponentCollector({ filter1, time: 15000 });
        const filter2 = i => i.customId === 'B' && i.user.id === '702856445573464107';
        const collector1 = interaction.channel.createMessageComponentCollector({ filter2, time: 15000 });
        const filter3 = i => i.customId === 'C' && i.user.id === '702856445573464107';
        const collector2 = interaction.channel.createMessageComponentCollector({ filter3, time: 15000 });

        const logChannel = this.client.channels.cache.get('919981441826291733');

        const ban = this.client.functions.embed()
            .setAuthor(`Logs Ban :`)
            .setDescription(`${member} à été Ban !
            Raison : ${reason}`)
            .setColor('#f00020')
            .setTimestamp()
            .setFooter(`Ban par ${interaction.author.username}`);

        const embedErr = this.client.functions.embed()
            .setColor('RED')
            .setDescription(`Le membre que vous ciblé n'existe pas !`)

            const off = new MessageEmbed()
            .setAuthor('Erreur 404.')
                .setDescription(`Je crois que ce message vient d'un ban! Tu as l'air perdu, étranger. Vous savez ce qui aide quand vous êtes perdu ? Un bol de nouilles bien chaud. Asseyez-vous, nous travaillons frénétiquement ici pour préparer quelque chose de bon.
                
                [▶ Discussion](https://discord.com/channels/794575292973973506/794589402730332170)
                [❓ contact help](https://discord.com/channels/794575292973973506/925724900856062024)`)
    .setImage('https://discord.com/assets/e4ec7c5d7af5342f57347c9ada429fba.gif')
            
          const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setCustomId('A')
              .setEmoji('🔨')
              .setLabel(`Ban`)
              .setStyle('SUCCESS')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('B')
              .setLabel(`Cancel`)
              .setStyle('DANGER')
          );
          const acceptOppen = new MessageActionRow()
              .addComponents(
                new MessageButton()
                .setCustomId('C')
                .setLabel('Continuer')
                .setStyle('SECONDARY')
              )

              const acceptOppen1 = new MessageEmbed()
              .setDescription('Cliquer sur continuer pour aller à la procédure pour kick un utilisateur !\n\n⚠ Fait attention tu ne pourra plus cliqué sur le boutton car le message sera supprimer dans 1min')
        
          collector.on('collect', async i => {
            if (i.customId === 'A') {
                if (member) {
                    await member.ban() 
                    await i.deferUpdate();
                    await i.editReply({ content: `${member} à été ban !\nPour les logs -> <#919981441826291733>`, components: [] });
                    logChannel.send({ embeds: [ban] });
                } else await message.channel.send("L'utilisateur n'existe pas !")
            }
          });
        
          collector1.on('collect', async i => {
            if (i.customId === 'B') {
              await i.deferUpdate();
              await i.editReply({ content: `**Ban** Annuler !`, components: [] });
            }
          });

          collector2.on('collect', async i => {
            if (i.customId === 'C') {
              await i.update({ embeds: [off], components: [] })
              return i.followUp({ content: `Vous êtes sûr de ban ${member}`, ephemeral: true, components: [row] })   
            }
          });
          
          if (member) { 
            await interaction.channel.send({ephemeral: true, embeds: [acceptOppen1], components: [acceptOppen] }).then(i => { setTimeout(() => i.delete(), 60000)})
          } else await interaction.channel.send({ embeds: [embedErr], components: [], ephemeral: true }).then(i => { setTimeout(() => i.delete(), 5000)})
      
        } catch (err) {
          console.log(err)
        }

            } 
    }

module.exports = BanCommand;