const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES
  
    if (!kicked) {
      let kickinfoembed = new Discord.MessageEmbed()
        .setTitle("Comando de Kick")
        .setDescription(
          `**Descrição:** Expulse um membro. \n` +
            "**Sub comando:**\n" +
            "\n" +
            "**Usage:**\n" +
            "s!kick [usuário] (rasão) \n" +
            "**Examples:** \n" +
            "s!kick <@597253939469221891> spam"
        )
        .setColor("#2C2F33");
      message.channel.send(kickinfoembed);
  
      return;
    }
  
    if (message.author === kicked) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You cannot sanction yourself`)
        .setColor("#2C2F33");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Pff digite a rasão`)
        .setColor("#2C2F33");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "Não tens a permicão `Expulsar Usuário` peça a um administrador para fazer por si"
        )
        .setColor("#2C2F33");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "Não tens a permicão `Expulsar Usuário` peça a um administrador para fazer por si"
        )
        .setColor("#2C2F33");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.member(kicked).kick(reason);
  
    let successfullyembed = new Discord.MessageEmbed()
      .setDescription(`${kicked.tag} Foi expulso com sucesso!.`)
      .setColor("#2C2F33");
  
    message.channel.send(successfullyembed);
}