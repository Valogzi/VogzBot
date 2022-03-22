const { embed } = require('../util/functions');
const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const { Activity } = require('discord.js');

module.exports = class ValogziClient extends AkairoClient {
    constructor(config = {}) {
        super(
            { ownerID: '702856445573464107' },
            {
                allowedMentions: {
                    parse: ['everyone', 'roles', 'users'],
                    repliedUser: false
                },
                partials : ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
                presence: {
                    status: 'online',
                    activities: [
                        {
                            name: `Twitch : Valogzi`,
                            type: 'STREAMING', 
                            url: 'https://twitter.com/@VogzCorp'
                        }
                    
                    ]
                },
                intents: 32767
            }
        );

        this.CommandHandler = new CommandHandler(this, {
            prefix: config.prefix,
            defaultCooldown: 2000,
            directory: './src/commands/',
        });

        this.listenersHandler = new ListenerHandler(this, {
            directory: './src/listeners/'
        });

        //this.client.functions.embed()
        this.functions = {
            embed: embed
        }

        this.CommandHandler.loadAll();
        this.CommandHandler.useListenerHandler();
        this.listenersHandler.loadAll();

    }
}