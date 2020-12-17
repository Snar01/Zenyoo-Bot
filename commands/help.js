const Discord = require('discord.js');
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
	const ajuda = new Discord.MessageEmbed()
		.setColor('BLUE')
		.setTitle('Lista de comandos!')
		.setDescription(
			'Olá sou eu Zenyoo se você quiser saber meus comandos basta reagir de acordo com os emojis ai embaixo.\n\n\n<a:utilidade:753286949095080076>-Utilidades\n\n<a:admins:753283347882442783>-Administrativos\n\n<a:star:753261621673197668>-Diversão\n\n<a:money:753286975171067934>-Econômia\n\n<a:musica:763008819013484575>-Musica\n\n<a:nao:747486800062447730>-Mostra as categorias novamente!\n\nMe convide para seu server:'
		)
		.addField(
			'Link:',
			'[Clique aqui para me convidar para seu server!](https://discord.com/oauth2/authorize?client_id=728633587209076736&scope=bot&permissions=14)'
		);
	message.channel.send(ajuda).then(msg => {
		msg.react('753286949095080076').then(r => {
			msg.react('753283347882442783').then(r => {
				msg.react('753261621673197668').then(r => {
					msg.react('753286975171067934').then(r => {
						msg.react('763008819013484575').then(r => {
							msg.react('747486800062447730').then(r => {});
						});
					});
				});
			});
		});

		const infosFilter = (reaction, user) =>
			reaction.emoji.name === 'utilidade' && user.id === message.author.id;
		const admFilter = (reaction, user) =>
			reaction.emoji.name === 'admins' && user.id === message.author.id;
		const funFilter = (reaction, user) =>
			reaction.emoji.name === 'star' && user.id === message.author.id;
		const moneyFilter = (reaction, user) =>
			reaction.emoji.name === 'money' && user.id === message.author.id;
		const musicaFilter = (reaction, user) =>
			reaction.emoji.name === 'musica' && user.id === message.author.id;
		const voltarFilter = (reaction, user) =>
			reaction.emoji.name === 'nao' && user.id === message.author.id;

		const infos = msg.createReactionCollector(infosFilter);
		const adm = msg.createReactionCollector(admFilter);
		const fun = msg.createReactionCollector(funFilter);
		const money = msg.createReactionCollector(moneyFilter);
		const musica = msg.createReactionCollector(musicaFilter);
		const voltar = msg.createReactionCollector(voltarFilter);

		infos.on('collect', r2 => {
			ajuda.setTitle('Comandos de utilidade!');
			ajuda.setDescription(
				'**z!**help - Mostra todos os meus comandos!\n\n' +
					'**z!**serverinfo - Use para mostrar algumas informações sobre esse server!\n\n' +
					'**z!**userinfo - Use para ver algumas informações suas!\n\n' +
					'**z!**ping - Use para ver meu ping no seu server!\n\n' +
					'**z!**suporte - Use para entrar no meu server de suporte!\n\n' +
					'**z!**botinfo - Use para ver algumas informações minhas!\n\n' +
					'**z!**servericon - Use para ver o icone do servidor!\n\n' +
					'**z!**clima - veja como está o clima na sua região.\n\n' +
					'**z!**vote - Vote em mim!\n\n' +
					'**z!**invite - Me convide para o seu server!\n\n' +
					'**z!**traduzir - traduza um texto em outra lingua!\n\n'
			);
			msg.edit(ajuda);
		});

		adm.on('collect', r2 => {
			ajuda.setTitle('Comandos de administração!');
			ajuda.setDescription(
				'**z!**clear - Use para apagar de 2 a 99 mensangens!\n\n' +
					'**z!**say - ***REMOVIDO TEMPORÁRIAMENTE***\n\n' +
					'**z!**kick - Use para expulsar um \n\n' +
					'**z!**ban - Use para banir aquele usuário que quebrou as regras do seu servidor.\n\n' +
					'**z!**welcome - EM MANUTENÇÂO\n\n' +
					'**z!**goodbye - EM MANUTENÇÃO\n\n' +
					'**z!**modolento - deixe um canal mais lento\n\n' +
					'**z!**lock - feche um canal!\n\n' +
					'**z!**unlock - abra um canal!\n\n'
			);
			msg.edit(ajuda);
		});

		fun.on('collect', r2 => {
			ajuda.setTitle('Comandos de diversão!');
			ajuda.setDescription(
				'**z!**kiss - Use para dar um beijo em uma pessoa que você goste!\n\n' +
					'**z!**hug - use para dar um abraço em alguém!\n\n' +
					'**z!**punch - Use para dar um soco em alguém que te pertuba!\n\n' +
					'**z!**coinflip - Use cara ou coroa para ver se você me ganha!\n\n' +
					'**z!**ship - Marque duas pessoas para saber se elas dariam um casal!\n\n' +
					'**z!**8ball - me faça uma pergunta e eu responderei\n\n' +
					'**z!**enfim - crie seu proprio meme do enfim a hipocrisia\n\n' +
					'**z!**laranjo - faça com que o laranjo fale alguma coisa.\n\n' +
					'**z!**primeiraspalavras - faça o bebê dizer suas primeiras palavras.'
			);
			msg.edit(ajuda);
		});

		money.on('collect', r2 => {
			ajuda.setTitle('Comandos de econômia!');
			ajuda.setDescription(
				'**z!**daily - colete suas Zcoins diária com esse comando!\n\n' +
					'**z!**work - trabalhe um pouco e ganhe mais Zcoins!\n\n' +
					'**z!**atm - Veja o tanto de Zcoins que você tem em sua bolsa e no banco!\n\n' +
					'**z!**profile - mostra de forma geral o seus perfil no nosso banco!\n\n' +
					'**z!**dep - deposite seu dinheiro no banco para evitar de ser roubado!\n\n' +
					'**z!**pay - sempre lembre-se de paga um favor que seu amigo fez para você!\n\n' +
					'**z!**buy - Use esse comando para comprar algo na minha loja!\n\n' +
					'**z!**shop - Use esse comando para ver os itens da minha loja!\n\n' +
					'**z!**with - retire dinheiro do banco com esse comando!\n\n' +
					'**z!**rob - roube aquele seu amigo com muito dinheiro na bolsa!'
			);
			msg.edit(ajuda);
		});

		musica.on('collect', r2 => {
			ajuda.setTitle('Comandos de musíca!***(Não estão funcionando!)***');
			ajuda.setDescription('');

			msg.edit(ajuda);
		});

		voltar.on('collect', r2 => {
			ajuda.setTitle('Lista de Comandos!');
			ajuda.setDescription(
				'Reagir de acordo com o  que procura!\n\n<a:utilidade:753286949095080076>-Utilidades\n\n<a:admins:753283347882442783>-Administrativos\n\n<a:star:753261621673197668>-Diversão\n\n<a:money:753286975171067934>-Econômia\n\n<a:nao:747486800062447730>-Volta para o início'
			);

			msg.edit(ajuda);
		});
	});
};
