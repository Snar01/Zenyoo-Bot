const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (client, message, args) => {
  message.delete();
  /*message.reply('Oi').then(msg => msg.delete({timeout: 5000}));*/
  
  const delay = 0;
  var embed = new Discord.MessageEmbed()
    .setTitle('Sobre o JavaScript e say')
    .setDescription('🤔 Informações sobre o JavaScript \n \n ✏️ Comando de say em JavaScript'); 

    message.channel.send({ embed }).then( msg => {
      msg.react('🤔').then(setTimeout(r => {
      msg.react('✏️');
      }, delay ));

      const adm = (reaction, user) => reaction.emoji.name === '🤔' && user.id === message.author.id;
      const pub = (reaction, user) => reaction.emoji.name === '✏️' && user.id === message.author.id;
      const admCreate = msg.createReactionCollector(adm, { time: 60000 });
      const pubCreate = msg.createReactionCollector(pub, { time: 60000 });

      admCreate.on('collect', async (reaction, r2) => {
        embed = new Discord.MessageEmbed()
          .setTitle('Sobre o JavaScript')
          .setColor('BLUE')
          .setDescription(`Olá ${message.author}, fui programado em JS(JavaScript) pelo Soi seu Papa#0001 e 𝒯𝓇𝓎𝒸𝒸𝑒#3685
          Mas querias saber uma coisa até que boa o todo o lado, JeavaScript está  no teu Google, opera, qualquer dispositivo com browser!
          Se desativares o JS(JavaScript) parece que o teu Google como for, fica tipo nos anos 80 🙂 mas uma coisa que tu não sabes HTML5 CSS3 e JavaScript estão num grupo!
          
          Para isso só com soltar o Google, opera o que for!`)
          .setFooter(`${client.user.username}`);
          msg.edit(embed);
          reaction.users.remove(message.author);
      });

      pubCreate.on('collect', async (reaction, r2) => {
        embed = new Discord.MessageEmbed()
          .setTitle('✏️ Código de say')
          .setDescription(`\`\`\`js
const Discord = require('discord.js');
          
exports.run = async (client, message, args) => {
const msg = args.join(' ');
message.delete().catch(O_o => {});
message.channel.send(msg);
};\`\`\``);
          msg.edit(embed);
          reaction.users.remove(message.author);
      });

});
  message.delete().catch(O_o => {});
  
}
