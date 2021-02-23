module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`🏓 **| Pong!**\nMinha latência no Server: **${m.createdTimestamp -
    message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};