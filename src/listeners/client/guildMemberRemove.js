const { Listener } = require('discord-akairo');


class guildMemberRemoveListener extends Listener {
    constructor() {
        super('guildMemberRemove', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    async exec(member) {
        const logChannel = this.client.channels.cache.get('919930480944644136');

        const embed = this.client.functions.embed()
        .setTitle('Oh ! Un aventurier nous a quitté...')
        .setDescription(`${member} a quitté le serveur !`)
        .setFooter(`IL y a maintenant ${member.guild.memberCount.toLocaleString()} membres !`)

        await logChannel.send({ embeds: [embed] })
            .then(() => console.log(`message envoyer`))
            .catch(() => console.log(`message pas envoyer`))
    }
}

module.exports = guildMemberRemoveListener;