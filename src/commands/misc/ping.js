const { Command } = require('discord-akairo');
const { SlashCommandBuilder } = require('@discordjs/builders');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           name: 'ping',
           aliases: ['ping'],
           category: 'Misc',
           description: {
        content: 'La commande ping renvois la latence du bot!',
        usage: 'ping',
        exemples: ['ping']
        },
        cooldown: 10000,
        });
    }
    

    async exec(message) {
        message.delete()
        const sentMessage = await message.channel.send('pong!');
        const timeStamp = message.editedTimestamp ? message.editedTimestamp : message.createdTimestamp;
        const botLatency = `${'```'}\n  ${Math.round(sentMessage.createdTimestamp - timeStamp)}ms ${'```'}`;
        const apiLatency = `${'```'}\n  ${Math.round(message.client.ws.ping)}ms ${'```'}`;

        const embed = this.client.functions.embed()
            .setTitle('Pong!  🏓')
            .addField('Latence du bot', botLatency, true)
            .addField('Latence de l\'API', apiLatency, true)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setTimestamp();

            await sentMessage.edit({
                content: null,
                embeds: [embed]
            })
    }
}

module.exports = PingCommand;