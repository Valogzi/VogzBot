// const { Listener } = require('discord-akairo');
// const { MessageEmbed } = require('discord.js');


// class EmojiWarnListener extends Listener {
//     constructor() {
//         super('messageCreate', {
//             emitter: 'client',
//             event: 'messageCreate'
//         });
//     }

//     async exec(message) {
//         const logChannel = this.client.channels.cache.get(`946758041255153725`);
//           if (message.content === 'BAZC4') { 
//              await message.member.roles.add('794607456742932501')
//             .then(() => console.log(`rôles donner !`))
//             .catch(() => console.log(`roles pas donner !`))
//           } else {
//             message.member.kick()
//           }
        
//       }
//     }

// module.exports = EmojiWarnListener;