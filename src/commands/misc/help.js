const { stripIndents } = require('common-tags');
const { Command } = require('discord-akairo');
const { embed } = require('../../util/functions');

class HelpCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help', 'h'],
           category: 'Misc',
           description: {
                content: 'La commande help renvois la liste des commandes!',
                usage: '(h)elp <command> | &? <command>',
                exemples: ['help', 'help userinfo', 'h ping', '? rename'],
           },
         args: [{ id: 'command', type: 'commandAlias' }]
        });
    }

    async exec(message, args) {

        try {


        const prefix = this.handler.prefix;
        const command = args.command;
        const logUserDM = this.client.users.cache.get(`${message.member.id}`);
        if (!command) {
        let embed = this.client.functions.embed() 
            .setAuthor(
                `Command de ${this.client.user.username} :`,
                this.client.user.displayAvatarURL()
                )
                .setDescription(`Retrouvez la liste de toutes nos commandes ci-dessous !
**------------------**`)

                for (const category of this.handler.categories.values()) {
                    embed.addField(
                        `ф ${category.id}`,
                        `${category
                            .filter(cmd => cmd.aliases.length > 0)
                            .map(cmd => `\`${cmd.aliases[0]}\``)
                            .join(', ')}`
                    )
                }

                embed.addField(
'**------------------**',
`**\`${prefix}help <commandSpécifique>\` pour des infos sur une commande spécifique.**
Exemples: \`${prefix}help ping\` | \`${prefix}help userinfo\`

---
Rappel :
${prefix} = prefix à utiliser sur le bot 
() = alias | {} = sous-commande(s) disponible | <> = argument(s) optionnel(s) | [] = argument(s) obligatoire 
Ne pas inclure les caractères suivants -> [], (), et <> dans vos commandes
Si  vous avez un problème, rejoignez le serveur support!
`)



        
            return message.channel.send({ embeds: [ embed ]});
        }
        message.delete()
        return logUserDM.send({content: 'Vous m\'avez appeler ?', embeds: [this.client.functions.embed()
            .setAuthor(`Help commande --> ${command.aliases[0]}`)
            .setDescription(`${command.ownerOnly ? '*⚠️ Commande Administrateur*' : ''}${command.userPermissions ? `*⚠️ Commande qui necesite la permission ${command.userPermissions}*` : ''}
            
            Description: **${command.description.content}**

${
command.description.subCommand == '' || command.description.subCommand == undefined
? 'Aucune sous-commande disponible !'
: `Sous-commandes : ${command.description.subCommand}`
}

Utilisation: **${prefix}${command.description.usage}**
Exemples: **${prefix}${command.description.exemples.join(` | ${prefix}`)}**
`)
.setColor('GREEN')]});
} catch (err) {
    console.log(err)
    message.channel.send(`Vous ne pouvez pas executer cette commande dans le mp du bot !`)
}

    }
}

module.exports = HelpCommand;