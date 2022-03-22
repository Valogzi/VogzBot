const { Command } = require('discord-akairo');
const wait = require('util').promisify(setTimeout);
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

class WarnCommand extends Command {
    constructor() {
        super('Warn', {
            aliases: ['Warn'],
            category: 'Modération',
            description: {
                content: 'La commande Warn permet d\'ajouté un warn et d\'en enlever sur un utilisateur choisis dans la commande!',
                usage: 'warn <member>',
                exemples: ['warn @exemple']
            },
            channel: 'guild',
            args: [
                { id: 'member', type: 'member' }
            ],
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS']
        });
    }
    
    
    async exec(interaction, { member }) {
        interaction.delete()
        const collector = interaction.channel.createMessageComponentCollector();
        // interaction.delete()
        const Nv1Warn = 'niveau 1'
        const Nv2Warn = 'niveau 2'
        const Nv3Warn = 'niveau 3'
   
        const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('w')
            .setEmoji('💥')
            .setLabel(`Warn 1`)
            .setStyle('SECONDARY')
            
        )
        .addComponents(
            new MessageButton()
              .setCustomId('x')
              .setEmoji('💥')
              .setLabel(`Warn 2`)
              .setStyle('SECONDARY')
              
        )
        .addComponents(
            new MessageButton()
              .setCustomId('b')
              .setEmoji('💥')
              .setLabel(`Warn 3`)
              .setStyle('SECONDARY')
              
        )
        .addComponents(
            new MessageButton()
              .setCustomId('s')
              .setEmoji('⚙️')
              .setLabel(`Manage warn`)
              .setStyle('SECONDARY')
              
        );
        const WarnRemove = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('a')
            .setEmoji('⚙️')
            .setLabel(`Remove Warn 1`)
            .setStyle('SECONDARY')
            
        )
        .addComponents(
            new MessageButton()
              .setCustomId('t')
              .setEmoji('⚙️')
              .setLabel(`Remove Warn 2`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('y')
              .setEmoji('⚙️')
              .setLabel(`Remove Warn 3`)
              .setStyle('SECONDARY')
              
          )
          .addComponents(
            new MessageButton()
              .setCustomId('p')
              .setEmoji('◀️')
              .setLabel(`Retour`)
              .setStyle('DANGER')
              
          )


        collector.on('collect', async i => {
            if (i.customId === 'w') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez appliqué 1 warn sur ${member}`})
                    await member.roles.add('948603883847032903')
                }
            }
            if (i.customId === 'x') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez appliqué 2 warn sur ${member}`})
                    await member.roles.add('948603942403706910')
                }
            }
            if (i.customId === 'b') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez appliqué 3 warn sur ${member}`})
                    await member.roles.add('948603995881087076')
                }
            }
            if (i.customId === 's') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Voulez vous supprimer un warn à ${member} ?`, components: [WarnRemove]})
                }
            }
            if (i.customId === 'a') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez supprimer le warn 1 à ${member}`, components: []})
                    await member.roles.remove('948603883847032903')
                }
            }
            if (i.customId === 't') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez supprimer le warn 2 à ${member}`, components: []})
                    await member.roles.remove('948603942403706910')
                }
            }
            if (i.customId === 'y') {
                if (member) {
                    await i.reply({ephemeral: true, content: `Vous avez supprimer le warn 3 à ${member}`, components: []})
                    await member.roles.remove('948603995881087076')
                }
            }
            if (i.customId === 'p') {
                if (member) {
                    await i.update({content: 'Veuillez choisir le warn!', components: [row]})
                }
            }
          });
       if (member) {
           await interaction.channel.send({content: 'Veuillez choisir le warn!', components: [row]}).then(i => { setTimeout(() => i.delete(), 5000)})
       } else interaction.channel.send(`Veuillez ciblé un membre!`)

            } 
    }

module.exports = WarnCommand;