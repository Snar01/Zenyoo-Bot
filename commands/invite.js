const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("Zenyoo Invite")
    .setColor("RANDOM")
    .setDescription("Olá gostaria de me adicionar no seu server?\n\nSe sim muito obrigado.")
    .addField("Convite", "[Clique aqui e me convide.](https://discord.com/oauth2/authorize?client_id=728633587209076736&scope=bot&permissions=14)")
    .addField("Suporte", "[Clique aqui para entrar no meu server de suporte.](https://discord.gg/ME4NtXV)")

    message.reply(embed)
}