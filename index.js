const express = require('express');
const app = express();
app.get('/', (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require('discord.js'); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)
  )
    return;

  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error('Erro:' + err);
  }
});

//Aqui o Zenyoo responde quando alguém marca ele!
client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  let member = message.mentions.members.first();
  if (member)
    if (member.id == `${client.user.id}`)
      message.channel.send(
        'Olá, eu sou Zenyoo, se você me marcou é porquê quer saber meus comandos correto? Se for isso siga o quê eu digo abaixo.\n\nUse z!help para saber os meus comandos.'
      );
});

//Aqui sempre que ele liga mostra no conole os servidores!
client.on('ready', () => {
  client.guilds.cache.map(x => {
    console.log(`Nome: ${x.name}`);
  });
});

//Aqui mostra no console os novos servidores!
client.on('guildCreate', guild =>
  console.log(
    `Fui adicionado no servidor ${guild.name} (${guild.id}), dono: ${
    guild.owner.user.tag
    }`
  )
);

//Aqui mostra no console quando ele sai de um servidor!
client.on('guildDelete', guild =>
  console.log(
    `o garaio me tiraro do servidor ${guild.name}, to tristão meu, bane o ${
    guild.owner.user.tag
    }`
  )
);

//Evento de status do bot
client.on('ready', () => {
  let activities = [
    `Utilize ${config.prefix}help para saber quais os meus comandos`,
    `Eu estou em ${client.guilds.cache.size} lugares diferentes!`,
    `Use z!vote e me ajude a melhorar!`,
    `com ${client.users.cache.size} amigos!`,
    `Use z!suporte e entre para o meu server`,
    `Fui criado por Leonardo ST#1295`
  ],
    i = 0;
  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: 'PLAYING'
      }),
    12000
  );
  client.user.setStatus('online').catch(console.error);
  console.log('Estou Online!');
});

//essa const so serve se seu bot estiver na Zulaaa.com
const votosZuraaa = require('./votosZuraaa.js');

// Evento de mensagens do bot, onde ele manda na dm agradecendo pelo voto
client.on('message', message => {
  votosZuraaa.verificaVotos(message, user => {
    user.send(
      'Obrigado por votar em mim, seu voto me ajuda a melhorar a cada dia. 😀'
    );
  });
});


client.login(process.env.TOKEN);
