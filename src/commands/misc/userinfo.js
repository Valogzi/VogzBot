const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class UserInfoCommand extends Command {
    constructor() {
        super('userinfo', {
           aliases: ['userinfo', 'ui'],
           category: 'Misc',
           description: {
            content: 'La commande userinfo renvois les infos de l\'utilisateur!',
            usage: 'userinfo <member> <mp|avatar|roles|compte>',
            exemples: ['userinfo', 'userInfo <@member>']
            },
           channel: 'guild',
           args: [
               { id: 'member', type: 'member', default: message => message.member }, 
               { id: 'argSup', type: 'string' },
           ]
        });
    }

    exec(message, args) {
        message.delete()
        const logUserDM = this.client.users.cache.get(`${message.member.id}`);
        const guildMember = args.member
        const ArgsSupp = args.argSup

    
        if (ArgsSupp == 'avatar') return logUserDM.send({ content: `Voici la photo de profile de ${guildMember} :`, embeds: [
            new MessageEmbed()
            .setImage(guildMember.user.displayAvatarURL())
            // .setTitle(`${guildMember.displayName} (${guildMember.id})`)
            //  .setThumbnail(guildMember.user.displayAvatarURL())
            //  .setDescription(`Son compte a été créé le ${guildMember.user.createdAt}
            //  Bot: ${guildMember.user.bot}
            //  Roles: ${guildMember.roles.cache.map(role => role).join(', ')}`)
        ]})
        
        if (ArgsSupp == 'roles') return logUserDM.send({ content: `Voici les roles que posède ${guildMember} :`, embeds: [
            new MessageEmbed()
            .setDescription(guildMember.roles.cache.map(role => role.name).join(', ').replace(', @everyone', ' '))
        ]})
        
        if (ArgsSupp == 'compte') return logUserDM.send({ content: `Voici les infos du compte de ${guildMember} :`, embeds: [
            new MessageEmbed()
            .setDescription(`Son compte a été créé le ${guildMember.user.createdAt}`)
        ]})
        
        if (ArgsSupp == 'mp') return logUserDM.send({ embeds: [
            this.client.functions.embed()
            .setTitle(`${guildMember.displayName} (${guildMember.id})`)
            .setThumbnail(guildMember.user.displayAvatarURL())
            .setDescription(`Son compte a été créé le ${guildMember.user.createdAt}
            Bot: ${guildMember.user.bot}
            Roles: ${guildMember.roles.cache.map(role => role.name).join(', ').replace(', @everyone', ' ')}`)
        ]})
            return message.channel.send({ embeds: [
            this.client.functions.embed()
            .setTitle(`${guildMember.displayName} (${guildMember.id})`)
            .setThumbnail(guildMember.user.displayAvatarURL())
            .setDescription(`Son compte a été créé le ${guildMember.user.createdAt}
            Bot: ${guildMember.user.bot}
            Roles: ${guildMember.roles.cache.map(role => role).join(', ').replace(', @everyone', ' ')}`)]})
                
                
            
            
        
    }
}

module.exports = UserInfoCommand;