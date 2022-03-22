const { Command } = require('discord-akairo');

class candidatureCommand extends Command {
    constructor() {
        super('candidature', {
           aliases: ['candidature', 'c'],
           category: 'Admin',
           ownerOnly: true,
           description: {
        content: 'La commande candidature renvois une candidature staff VogzCorp!',
        usage: 'candidature, c',
        exemples: ['candidature, c']
        },
        });
    }

    exec(message) {
    const embed = this.client.functions.embed()
            .setDescription(`Bonjour à tous je vous donne l\'opportunité de postulé dans notre staff ! Voici les condition ci dessous :

Rôles dispo : 
<@&794609986365685761>

<@&794610418600378398>

<@&866693005740867596>

<@&805783996830056468>
--> *la super modo est en dessous de la modo discord car c'est pour gestion textuel !*

**champ obligatoire*.\`\`\`
Poste demandé* :

Age* :
                    
Expérience* :
                    
Qualités/défauts :
                    
Disponibilité (Vacance et Cours)* :
                    
Pourquoi vous :
                    
Pourquoi nous* :
                    
Vos ambitions/motivations* :\`\`\`
          
Merci et bienvenu d'avance dans le VogzCorp !

*Toute les candidature deverons être envoyer dans un tiket créé dans <#794587338915184680> !*
`)
            .setFooter('Candidature envoyer (le)')
            .setTimestamp();
            
            return message.channel.send({ embeds: [ embed ]});
            }
    }



module.exports = candidatureCommand;