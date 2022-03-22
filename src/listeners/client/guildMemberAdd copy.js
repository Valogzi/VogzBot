const { Listener } = require('discord-akairo');
const { User, MessageEmbed } = require('discord.js');


class GuildMemberAddListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    async exec(member) {

        try {

        const logChannel = this.client.channels.cache.get('794579116853821490');
        const logcaptahc = this.client.channels.cache.get('946758041255153725');
        const logUserDM = this.client.users.cache.get(`${member.id}`)
        const nonBotUsers = this.client.users.cache.filter(u => !u.bot);
        const captchat = 'https://cdn.discordapp.com/attachments/777503500795904031/946759568061517874/captchatServeur.png'

        const embed = this.client.functions.embed()
        .setTitle('Oh ! Un nouvelle aventurier...')
        .setDescription(`${member} a rejoint le serveur !
        Passe lire le règlement dans <#794579285213052928>`)
        .setFooter(`IL y a maintenant ${member.guild.memberCount.toLocaleString()} membres !`)
        await logUserDM.send(`Salut, bienvenu dans le serveur de VALOGZI ! Bonne aventure ! ;)`)
        await logChannel.send({ embeds: [embed] })
        .then(() => console.log(`message envoyer`))
        .catch(() => console.log(`message pas envoyer`))
        await member.roles.add('794607456742932501')
        .then(() => console.log(`rôles donner !`))
        .catch(() => console.log(`roles pas donner !`))
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = GuildMemberAddListener;