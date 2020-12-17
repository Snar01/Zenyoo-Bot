const Discord = require("discord.js")

exports.run = (client, message, args) => {
 if (!client.lockit) client.lockit = [];
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:nao:747486800062447730> | **Você nao tem permissão para usar este comando!**"); message.channel.createOverwrite(message.guild.id, {
 SEND_MESSAGES: false 
 })
 const embed = new Discord.MessageEmbed()
 .setTitle("<a:sim:747486309144068227>-Canal Broqueado!!!")
 .setDescription(`**${message.author} bloqueio ligado.**`)
 .setFooter("Digite z!unlock para desbloqueá-lo")
 .setColor("CRIMSOM")
message.channel.send(embed);
 };
 
 exports.help = {
    name: 'lock',
    aliases: ['fechar']
}