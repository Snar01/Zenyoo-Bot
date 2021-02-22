const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const fs = require("fs");
const env = require("dotenv");
env.config();

//handler do bot
client.config = config;

client.commands = new Discord.Collection();
client.aliases = new Map();
client.queue = new Map();

fs.readdir("./admin/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./admin/${file}`);
    let commandName = props.help.name;
    console.log(`Comando -----> ${commandName} <----- foi carregado na categoria admin`);
    client.commands.set(commandName, props);
    for (let i in props.help.analise) {
      client.aliases.set(props.help.analise[i], commandName)
    }
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = props.help.name;
    console.log(`Comando -----> ${commandName} <----- foi carregado na categoria gerais`);
    client.commands.set(commandName, props);
    for (let i in props.help.analise) {
      client.aliases.set(props.help.analise[i], commandName)
    }
  });
}); //este arquivo depois de fazer tudo, no final vao ter de adicionar o `exports.help = {name: "nome", analise: ["outra opeção de fazer"]}` mas não precisão de colocar o analise, se tirarem tem de tirar a virgula depois do nome
/*
//eventos
fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const evt = require(`./events/${file}`);
      let evtName = file.split('.')[0];
      console.log(`Evento Carregado >>> '${evtName}'`);
      client.on(evtName, evt.bind(null, client));
  });
});*/

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command);
  if (!cmd) {
    if (!client.aliases.get(command)) return
    else cmd = client.commands.get(client.aliases.get(command));
  }
  cmd.run(client, message, args);
});

client.on("ready", () => {
  console.log(`Estou ligado`);
  client.user.setActivity(`OS ESTADOS DO BOT`)
});

client.login(process.env.TOKEN);
