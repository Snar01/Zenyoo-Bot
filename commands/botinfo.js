const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	let user = message.mentions.members.first() || message.author;

	let totalSeconds = client.uptime / 1000;
	let days = Math.floor(totalSeconds / 86400);
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = totalSeconds % 60;

	let uptime = `**${days.toFixed()} dias, ${hours.toFixed()} horas ${minutes.toFixed()} minutos️,${seconds.toFixed()} segundos**`;
	const embed = new Discord.MessageEmbed()
		.setColor('BLUE')
		.setDescription(
			`Olá ${user} tudo bem?\nMeu nome é Zenyoo como você ja deve saber, sou um bot para discord cheio de comandos para ajudar você no seu server.Tenho comandos de economia, utilidades, moderação e diversão.\n**Meu prefixo:z!**\n\n<a:setaa:758703443388530698> **Informações:**\n🛠•Fui desenvolvido em **JavaScript**<:js:761562099218251777> e ultilizo nos meus comandos a blibioteca do **discord.js**.\n📁•Tenho **40** comandos.\n\n<:emoji_11:757282070224568360>•Meu tempo de atividade:**${uptime}**\n<a:Latncia:761562306898558988>•Minha latencia no server:**${Math.round(
      client.ws.ping
    )}ms**\n\n<a:setaa:758703443388530698> **Meu status:**\n> 🗺•Eu estou em **${
				client.guilds.cache.size
			}** lugares diferentes!\n> 👥•Conheço **${
				client.users.cache.size
			}** pessoas diferentes!\n\n<a:setaa:758703443388530698>**Links:**\n🏰•Entre no meu server clicando [aqui](https://discord.gg/ME4NtXV)\n✉•Me\ convide para o seu [server](https://discord.com/oauth2/authorize?client_id=728633587209076736&scope=bot&permissions=14)\n<:mcpg:761989512720547840>•Doe 1 real para mim e me [ajude](http://mpago.li/2Yuit7j) a ficar online\n\n<a:setaa:758703443388530698>**Desenvolvedor:**\nFui criado pelo <:rdg_dev:749587683449241662>**Leonardo ST#0506** no dia **03/07/2020**`
		);
	message.reply(embed);
};
