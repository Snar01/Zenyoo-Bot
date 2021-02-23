const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/xFVfcMJ.gif',
  'https://imgur.com/ZkfXWK3.gif',
  'https://imgur.com/5FMINMl.gif',
  'https://imgur.com/XlfZ5V1.gif',
  'https://imgur.com/t38NvwZ.gif',
  'https://imgur.com/gNZMc8W.gif',
  'https://imgur.com/XMqKmKj.gif',
  'https://imgur.com/bXsUW8y.gif',
  'https://imgur.com/d1UNFiU.gif',
  'https://imgur.com/mD6uNBA.gif',
  'https://imgur.com/HznijP0.gif',
  'https://imgur.com/fnArAUM.gif',
  'https://imgur.com/4aAAT65.gif',
  'https://imgur.com/3Vr7IKe.gif',
  'https://imgur.com/9ez7rGa.gif'
  ];
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Mencione um usuário para dar um soco.');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        
        .setColor('RED')
        .setDescription(`${message.author} deu um soco em ${user}`)
        .setImage(rand)
        .setTimestamp()
        
        .setFooter('K.O')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}