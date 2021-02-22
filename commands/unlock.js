const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você não tem permissão para usar esse comando!')
        message.channel.overwritePermissions([{ 

            id: message.guild.id, 
            
            accept: ['SEND_MESSAGES'], 
            
            }]); 
            
            let embed = new Discord.MessageEmbed()
               .setColor('#00FF00')
               .setTitle('🔓 Canal desbloqueado!')
               .setFooter(`Comando Solicitado por: ${message.author.username}`)


            return message.reply(embed)
}