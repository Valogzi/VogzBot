const { TOKEN } = require('./util/config');
const ValogziClient = require('./structures/ValogziClient');
const { MessageEmbed, Client } = require('discord.js');
const { Command } = require('discord-akairo');

let client = new ValogziClient({
   prefix: '!',
});

client.login(TOKEN);


// ping
