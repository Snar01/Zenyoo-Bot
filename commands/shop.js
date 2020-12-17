const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('z!'))return;  


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 10000 Coins [z!buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 750 [z!buy nike]\nCar: 5000 [z!buy carro]\nMansion: 100000 [z!buy mansao]")
    .setColor("RED")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}