const { Command } = require('discord-akairo');
const { MessageEmbed } = require("discord.js");

class embedDefaultCommand extends Command {
    constructor() {
        super('embed', {
           aliases: ['embed'],
           category: 'Dev',
           description: {
            content: 'Aucun description afilié à cette command!',
            usage: 'embed',
            exemples: ['embed', 'embed info']
            },
           channel: 'guild',
           ownerOnly: true,
           args: [
             { id: 'supp', type: 'string' }
           ]
        });
    }

    exec(message, args) {
        const supp = args.supp
        
if (supp === 'info') {
  return message.channel.send({content: 'Voici les informations sur les messages embeds de Discord.js@13', embeds: [new MessageEmbed()
  .setImage('https://cdn.discordapp.com/attachments/926901674176544848/943456672679067668/unknown.png')
.setDescription('[🔍 Lien source](https://discordjs.guide/popular-topics/embeds.html#embed-preview)\n--------------\n[🛰 __**MessageEmbed**__](https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed)\nReprésente une intégration dans un message (aperçu d\'image/vidéo, intégration enrichie, etc.)')]})
}
        return message.channel.send({ embeds: [
           new MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Some title')
          .setURL('https://discord.js.org/')
          .setAuthor('Some name')
          .setDescription('Some description here')
          .setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          .addField('Inline field title', 'Some value here', true)
          .setImage('https://i.imgur.com/AfFp7pu.png')
          .setTimestamp()
          .setFooter('Some footer text here')
       ]})
    }
}

module.exports = embedDefaultCommand;