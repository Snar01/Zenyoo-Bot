const jimp = require('jimp');

exports.run = async (client, message, args) => {
	let img = jimp.read(
		'https://cdn.discordapp.com/attachments/751486959033253998/757251420230647842/download.jpeg'
	);
	if (!args[0]) return message.reply('o quê você que por no meme?');
	img.then(image => {
		jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
			image.resize(685, 494);
			image.print(font, 20, 30, args.join(' '), 600);
			image.getBuffer(jimp.MIME_PNG, (err, i) => {
				message.channel.send({
					files: [{ attachment: i, name: 'Download.jpeg' }]
				});
			});
		});
	});
};
