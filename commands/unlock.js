const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
 if (!client.lockit) client.lockit = [];
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Você nao tem permissão para usar este comando!**"); message.channel.createOverwrite(message.guild.id, {
 SEND_MESSAGES: null
 })
 const embed = new Discord.MessageEmbed()
 .setTitle("<a:sim:747486309144068227>-Canal desbloqueado!!!")
 .setDescription(`**${message.author} bloqueio desligado.**`)
 .setFooter("Digite z!lock para bloqueá-lo novamente!")
 .setColor("WHITE")
message.channel.send(embed);
 };
 
 exports.help = {
    name: 'unlock',
    aliases: ['abrir']
}