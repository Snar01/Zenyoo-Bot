const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (client, message, args) => {
  message.delete();
  
  message.reply('Clica nas reações abaixo para explorar nos meus comandos!')
  /*message.reply('Oi').then(msg => msg.delete({timeout: 5000}));*/
 
  const delay = 2570;
  var embed = new Discord.MessageEmbed()
    .setTitle('Clica nas reações para saberres mais sobre os meus comandos!')
    .setDescription('⚙️ Comandos administração \n \n 😋 Comandos Gerais'); 

    message.channel.send({ embed }).then( msg => {
      msg.react('⚙️').then(setTimeout(r => {
      msg.react('😋');
      }, delay ));

      const adm = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;
      const pub = (reaction, user) => reaction.emoji.name === '😋' && user.id === message.author.id;
      const admCreate = msg.createReactionCollector(adm, { time: 60000 });
      const pubCreate = msg.createReactionCollector(pub, { time: 60000 });

      admCreate.on('collect', async (reaction, r2) => {
        embed = new Discord.MessageEmbed()
          .setTitle('**⚙️ Comandos de administradores!**')
          .setDescription(['s!ban <@user> (Bana um usuário do servidor) \n',
            's!clear <2 a 99> (Exclua mensagens do canal!) \n',
            's!dm <@user> <oq queres dizer> (ex: s!dm @user fez merda e disse que o servidor é uma merda coisa que não é!) \n',
            's!kick <@user> <motivo> (Expulse o usuário do servidor!) \n',
            's!limparavisos <@user> (Exclua os avisos so membro!) \n',
            's!lock (Bloquaia o canal!) \n',
            's!modolento <segundos,minutos,horas> <mútivo> \n',
            's!say <mensagem> (O bot mandsa a mensagem por ti!\n',
            's!sorteio <tempo> <canal> <oq vais sortear>\n',
            's!unlock (Desbloqueia o canal bloqueado!) \n',
            's!warn <@user> <motivo> \n']);
          msg.edit(embed);
          reaction.users.remove(message.author);
      });

      pubCreate.on('collect', async (reaction, r2) => {
        embed = new Discord.MessageEmbed()
          .setTitle('**😋 Comandos gerais!**')
          .setDescription(['s!js (Ver sobre a lingua de programação JavaScript\n',
          's!ping (Ver a latência do bot)\n',
          'ticket (Crie uma sala de suporte)\n']);
          msg.edit(embed);
          reaction.users.remove(message.author);
      });

});
  message.delete(8000).catch(O_o => {});

}