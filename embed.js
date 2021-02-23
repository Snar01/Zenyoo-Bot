const Discord = require('discord.js')
const c = require('../config.json')
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg=> msg.delete(8000))
    
    let mensg = args.join(' ')
    if(!mensg) {
        message.channel.send(`${message.author}, digite uma mensagem para inserir.`)
    return undefined;
    }

        const embed = new Discord.MessageEmbed()
    .setDescription(`${mensg}`)
    .setColor("RANDOM")
        message.channel.send(embed)
   message.delete().catch(O_o => {});
}

exports.help = {
    name: "embed"
}