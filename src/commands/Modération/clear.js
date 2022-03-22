const { Command } = require('discord-akairo');
const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

class clearCreate extends Command {
  constructor() {
    super('clear', {
      name: 'clear',
       aliases: ['clear'],
       category: 'Modération',
       description: {
        content: 'La commande clear permet de supprimer jusqu\'a 20 messages en mêmes temps!',
        usage: 'clear',
        exemples: ['clear']
        },
       channel: 'guild',
       emitter: 'guild',
       event: 'channelCreate',
       args: [
         { id: 'number', type: 'number' }
       ],
       userPermissions: 'BAN_MEMBERS'
    });
}

 async exec(message, {number}) {
   try {


   if (!number) return message.channel.send(`Veuillez entrez un nombre entre \`0\` et \`100\` !`).then(m => { setTimeout(() => m.delete(), 5000)}); 
   if (number > 100) return message.channel.send(`La valeur est trop grande ! Veuillez entrez un nombre entre \`0\` et \`100\` !`).then(m => { try { setTimeout(() => m.delete(), 5000) } catch (err) {console.log(err)}}); 
   
   if (number < 1) return message.channel.send(`La valeur est trop petite ! Veuillez entrez un nombre entre \`0\` et \`100\` !`).then(m => { try { setTimeout(() => m.delete(), 5000) } catch (err) {console.log(err)}}); 
   
   message.channel.bulkDelete(number > 100 ? number : number + 1).catch(async err => {
    console.log(err, '\n\nLe bot est toujours online !\n\n')
    if(err) return message.channel.send("Les messages datent de plus de 14 jours !").then(m => { try { setTimeout(() => m.delete(), 5000) } catch (err) {console.log(err)}}); 

}).then(async msg => {

    try {
      await message.channel.send(`${message.author === undefined ? message.user : message.author} a supprimé \`${msg.size}\` messages avec succès !`).then(m => { try { setTimeout(() => m.delete(), 5000) } catch (err) {console.log(err)}}); 
    } catch (err) {
      await message.channel.send(`${message.author === undefined ? message.user : message.author} Une erreur c'est produit ! Nous somme infiniment désolé...
erreur : 
\`\`\`DiscordAPIError: You can only bulk delete messages that are under 14 days old.
  at RequestHandler.execute (D:\\bot valogzi rank\\node_modules\\discord.js\\src\\rest\\RequestHandler.js:298:13)
  at processTicksAndRejections (node:internal/process/task_queues:96:5)
  at async RequestHandler.push (D:\\bot valogzi rank\\node_modules\\discord.js\\src\\rest\\RequestHandler.js:50:14)
  at async TextChannel.bulkDelete (D:\\bot valogzi rank\\node_modules\\discord.js\\src\\structures\\interfaces\\TextBasedChannel.js:312:7) {
method: 'post',
path: '/channels/926901674176544848/messages/bulk-delete',
code: 50034,
httpStatus: 400,
requestData: { json: { messages: [Array] }, files: [] }
}\`\`\``).then(async mess => setTimeout(async () => {mess.delete()}, 15000))
    }
})
} catch (err) {
  console.log(err)
}
    }
    
  }


module.exports = clearCreate;