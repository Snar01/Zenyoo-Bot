const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    let user = args[0];
    let text = args.slice(1).join(" ") || undefined;
    if (!user) return message.reply("você precisa fornecer um Tempo para o Slowmode.");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Você não tem permissão para usar este comando`);
    message.channel.setRateLimitPerUser(args[0])
    message.reply(`o tempo do Slowmode alterado com sucesso para ${args[0]} segundos!`)
}

exports.help = {
    name: 'slowmode',
    aliases: ['slow']
}