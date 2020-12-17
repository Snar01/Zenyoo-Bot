const Discord = require('discord.js');
const c = require('../config.json');
exports.run = async (client, message, args) => {

	let mensg = args.join(' ');
	if (!mensg) {
		message.channel.send(
			`${message.author}, me diga o quê é para mim repetir!😀`
		);
		return undefined;
	}

	const embed = new Discord.MessageEmbed()
		.setTitle('💬•Zenyoo repeti!')
		.setDescription(`${mensg}`)
		.setFooter(`comando executado por: ${message.member.displayName}`)
		.setColor('#00F2FF');
	message.channel.send(embed);
	message.delete().catch(O_o => {});
};

exports.help = {
	name: 'fala'
};
