const { Listener } = require('discord-akairo');


class guildBanRemoveListener extends Listener {
    constructor() {
        super('guildBanRemove', {
            emitter: 'client',
            event: 'guildBanRemove'
        });
    }

    async exec(member) {
        const logChannel = this.client.channels.cache.get('919981441826291733');

        const embed = this.client.functions.embed()
        .setTitle('Oh ! Un aventurier à été déban !')
        .setDescription(`**${member.user.username}** à été déban du serveur !`)
        .setColor('#008000');
        

        await logChannel.send({ embeds: [embed] })
    }
}

module.exports = guildBanRemoveListener;