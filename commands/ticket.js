const Discord = require('discord.js')

exports.run = async (client, message, args) => {
      const user = message.author.id;
    const name = "ticket" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        const eb = new Discord.MessageEmbed()
        .setTitle(`${message.author} você já abriu um ticket!`)
        message.channel.send(eb)
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
const ebw = new Discord.MessageEmbed()
.setTitle(`${message.author} já criai um ticket para você!`)
message.channel.send(ebw);

const ebww = new Discord.MessageEmbed()
.setTitle(`${message.author} o suporte já vem o atender!`)
chan.send(ebww).then((m)=>{ m.pin() })
})
}
}