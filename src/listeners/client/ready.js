const { Listener } = require('discord-akairo');


class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    async exec() {
        try {

        console.log('I\'m ready!');

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = ReadyListener;