const Discord = require("discord.js")
const transcript = require("discord-html-transcripts")
const Event = require("../../Structure/Event")

module.exports = new Event("interactionCreate", async (bot, interaction) => {
  const bot = Discord.Client

    if(interaction.isButton()) {

        if(interaction.customId === "ticket") {

            let channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent(interaction.channel.parentId)

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            })

            await interaction.reply({content: `Votre ticket a été créé avec succès ${channel} !`, ephemeral: true})
            
            let Embed = new Discord.MessageEmbed()
            .setColor(bot.color)
            .setTitle("Ticket créé")
            .setDescription(`${interaction.user.tag} a créé ce ticket, merci de lui répondre !`)
            .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
            .setTimestamp()
            .setFooter({text: bot.user.tag, iconURL: bot.user.displayAvatarURL({dynamic: true})})

            const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
            .setStyle("DANGER")
            .setEmoji("🔒")
            .setLabel("Fermer le ticket")
            .setCustomId("close"),
            new Discord.MessageButton()
            .setStyle("PRIMARY")
            .setEmoji("📑")
            .setLabel("Demander le transcript")
            .setCustomId("transcript"))

            await channel.send({embeds: [Embed], components: [btn]})
        }

        if(interaction.customId === "transcript") {

            await interaction.deferReply()
            await bot.channels.cache.get("944932662345351168").send({content: `Transcript de ${interaction.message.embeds[0].description.split(" ")[0]}`, files: [await transcript.createTranscript(interaction.channel)]})
            await interaction.editReply({content: "Transcript envoyé avec succès !", ephemeral: true})
        }

        if(interaction.customId === "close") {

            let user = interaction.guild.members.cache.find(m => m.user.username === interaction.message.embeds[0].description.split(" ")[0].split("#")[0] && m.user.discriminator === interaction.message.embeds[0].description.split(" ")[0].split("#")[1]).user;
            try {await user.send(`Votre ticket a été supprimé par ${interaction.user.tag}`)} catch (err) {}
            await interaction.channel.delete()
        }
    }
})