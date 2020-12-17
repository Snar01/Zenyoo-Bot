const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/I6dlohf.gif',
  'https://imgur.com/Dxf5kYU.gif',
  'https://imgur.com/V0b2AVg.gif',
  'https://imgur.com/Vsq614X.gif',
  'https://imgur.com/7vXPHVP.gif',
  'https://imgur.com/hzuA0Ve.gif',
  'https://imgur.com/7BiUcny.gif',
  'https://imgur.com/8G0kF5c.gif',
  'https://imgur.com/GUHqad9.gif',
  'https://imgur.com/fHHbKGb.gif'
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraço')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('abraço abraço abraço')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}