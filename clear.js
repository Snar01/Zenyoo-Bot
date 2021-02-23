const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	if (!message.member.permissions.has('MANAGE_MESSAGES'))
		return message.reply(
			'<a:nao:747486800062447730>|você não possui a permissão de `Gerenciar Mensagens` para usar esse comando'
		);
	const deleteCount = parseInt(args[0], 10);
	if (!deleteCount || deleteCount < 1 || deleteCount > 100)
		return message.reply(
			'forneça um número de até **100 mensagens** a serem excluídas'
		);

	const fetched = await message.channel.messages.fetch({
		limit: deleteCount 
	});
	message.channel.bulkDelete(fetched);
	message.channel
		.send(
			`**<a:limpachat:757711483000848475> ${
				args[0]
			} mensagens limpas nesse chat! <a:limpachat:757711483000848475>**`
		)
		.then(msg => msg.delete({ timeout: 5000 }))
		.catch(error => 
			console.log(`Não foi possível deletar mensagens devido a: ${error}`)
      
    );
};
