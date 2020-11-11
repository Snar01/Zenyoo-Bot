const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('z!'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<a:nao:747486800062447730> Você precisa de 10000 Zcoins para conprar Bronze VIP`);

    if (args[0] == 'bronze') {
        if (author < 10000) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:sim:747486309144068227> Você comprou Bronze VIP por 10000 Zcoins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 10000)
        message.channel.send(Embed2)
    } else if(args[0] == 'Nike') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<a:nao:747486800062447730> Você precisa de 750 Zcoins para comprar o sapato Nike`);

        if (author < 750) return message.channel.send(Embed2)
       
        db.fetch(`nike_${message.guild.id}_${user.id}`)
        db.add(`nike_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:sim:747486309144068227> Você comprou um Nike por 750 Zcoins.`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 750)
        message.channel.send(Embed3)
    } else if(args[0] == 'carro') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<a:nao:747486800062447730> Você precisa de 5000 Zcoins para comprar um carro.`);

        if (author < 5000) return message.channel.send(Embed2)
       
        db.fetch(`carro_${message.guild.id}_${user.id}`)
        db.add(`carro_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:sim:747486309144068227> Você comprou um carro por 5000 Zcoins.`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansao') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<a:nao:747486800062447730> Você precisa de 100000 Zcoins para comprar uma mansão.`);

        if (author < 100000) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:sim:747486309144068227> Você comprou uma mansão por 100000 Zcoins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100000)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription('<a:nao:747486800062447730> Coloque o quê você deseja da minha loja.')
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"buy",
    aliases: [""]
  }
