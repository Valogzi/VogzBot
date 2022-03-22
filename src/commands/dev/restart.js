const { Command } = require('discord-akairo');

class restartCommand extends Command {
    constructor() {
        super('restart', {
           aliases: ['restart', 'rs'], 
           category: 'Dev',
           description: {
                    content: 'La commande restart renvois à relancer le bot dans sa totalité!',
                    usage: 'restart, rs',
                    exemples: ['restart, rs'],
           },
        ownerOnly: true
        });
    }

    exec(message) {;
        require('child_process').execSync('pm2 restart 0');
    }
}

module.exports = restartCommand;