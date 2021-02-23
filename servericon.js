const Discord = require('discord.js');

module.exports = {
  nome: 'servericon',
  alternativas: ['servericon'],
  run: async (client, message, args) => {
    var embed = {
      title: `Icone do servidor ${message.guild.name}`,
      description: `[Clique aqui](${message.guild.iconURL({
        dynamic: true, format: "png", size: 4096
      })}) para baixar o icone desse servidor.`,
      color: 'RED',
      image: {
        url: message.guild.iconURL({ dynamic: true, format: "png", size: 4096 })
      }
    };
    message.reply({ embed: embed });
  }
};
