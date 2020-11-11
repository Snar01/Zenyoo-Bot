const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  if(!message.content.startsWith('z!'))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("green")
  .setDescription(`**${user} Saldo:**\n\n<:rdg_moneybag:747793877326364735>-Bolsa: ${bal}\n<:banco:757711508305215639>-Banco: ${bank}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}
