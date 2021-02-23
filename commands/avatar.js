const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  const foto = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle(`Avatar de ${user.username}`)
    .setDescription(`[Clique aqui](${avatar}) para baixar.`)
    .setImage(avatar)
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
  await message.channel.send(foto);

};

exports.help = {
  name: "avatar",
  analise: ["perfil"]
}
