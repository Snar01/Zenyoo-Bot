const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Falta-te a permissão `Gerencia Mensagens` para poder usa-lo!"
    );
    const say = args.join(' ');
    message.delete().catch(O_o => {});
    message.channel.send(say)
}