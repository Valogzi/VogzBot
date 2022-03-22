const { stripIndents } = require('common-tags');
const { Command } = require('discord-akairo');

class rulesCommand extends Command {
    constructor() {
        super('rules', {
           aliases: ['rules'],
           category: 'Admin',
           ownerOnly: true,
           description: {
                content: 'La commande rules renvois aux rules du serveur de Valogzi!',
                usage: 'rules',
                exemples: ['rules'],
           },
         args: [{ id: 'command', type: 'commandAlias' }]
        });
    }

    exec(message, args) {
        const prefix = this.handler.prefix;
        const command = args.command;

        if (!command) {
        let embed = this.client.functions.embed() 
            .setAuthor(
                `Règles de ${this.client.user.username} :`,
                this.client.user.displayAvatarURL()
                )
                .setDescription(`🔸 Pas de NSFW, de racisme, de sexisme, de harcèlement.
🔸 Évitez de spam, quel que soit le channel.
🔸 Les modificateurs de voix/soundboards sont interdits.
🔸 Publicité interdite, pour quoi que ce soit.
🔸 Pas de liens vers des sites douteux/inconnus.
🔸 Évitez tout sujet polémique. (religion, politique...)
🔸 Ayez un pseudonyme facile à mentionner.
🔸 Evitez de mentionnez les Administrateur (<@&794611275233624066>) et <@&794611796576698389>
🔸 Si vous avez un problème, mentionnez <@&794609986365685761> 

🔹 Prêtez attention à la description des channels.
🔹 Si quelqu'un enfreint ces règles, signale les modérateur
                
⚠️ Les Modérateurs auront toujours le dernier mot. (<@&794609986365685761>)
📌 Utilise Ctrl+P pour voir les messages épinglés.
TOUTE RÈGLES NON RÉSPECTER SERONT TRÈS SÉVÈREMENT SANCTIONNER

Une dernière chose.. pour ceux qui veulent créé leur serveur avec comme modèle celui ci, voici un lien : https://discord.new/bacqnCwa7Z3F
Si un modèle est utiliser avec le même nom et photo de profile, signaler le et l’utilisateur sera sanctionner sur ce serveur
**-----------------------**`)
        .setColor('#2f3136')



             
        
            return message.channel.send({ embeds: [ embed ]});
        }
    }
}

module.exports = rulesCommand;