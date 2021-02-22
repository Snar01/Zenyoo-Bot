const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Tu não tens a permissão `Banir Membros` para usar esse comando!")
     
    let membro = message.mentions.users.first();
    if(!membro) return message.reply("mencione um membro para banir.")
    
   message.guild.members.ban(membro.id)
    message.channel.send(`O membro ${membro} foi banido com sucesso!`)
}