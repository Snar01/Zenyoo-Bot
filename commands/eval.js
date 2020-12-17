const { MessageEmbed }= require('discord.js')

exports.run = async (client, message, args) => {
  if (!['618243241262972928', '439540421606113285'].some(a => message.author.id === a)) return message.channel.send('**<:negado:755502002619940935> Apenas desenvolvedores do bot podem utilizar este comando!**')
  if (!args[0])
    return message.channel.send(
      `** Insira um valor para executar o eval.**`
    );
await message.channel.send('Executando...').then(async m => {
  try {
    let beforeRunning = Date.now()
    let result = eval(args.join(' '))

    if (result instanceof Promise) {
      m.edit('O código retornou uma promise - aguardando ela ser resolvida...')
      await result
    }
    if (typeof result !== 'string') result = require('util').inspect(result)
    let end = (Date.now() - beforeRunning)
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor(`Aleluia !!! Vai chover, o ${message.author.username} acertou um código. Prepara o guarda-chuva viu`)
      .setDescription('```js\n' + result.slice(0, 2000) + '```')
      .addField('Tempo de execução', (end / 60).toFixed(5) + 's').setColor("3E70DD")
    m.edit('<:correto:755501974425960548> Sucesso!', { embed: embed })
  } catch (e) {
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor(`${message.author.username} Acho que você deveria voltar a fazer aula de programação, porque ta fogo viu.`)
      .setDescription('```js\n' + e.stack.slice(0, 2000) + '```')
      .setColor("3E70DD")
    m.edit(' Falha...', { embed: embed })
  }
})
}
exports.help = {
    name: 'eval',
    aliases: ['dev']
}