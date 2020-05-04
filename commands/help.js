const fs = require('fs');
const Discord = require("discord.js");

module.exports = {
	name: 'help',
	description: 'List all available commands.',
	execute(client, message, args) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			name += `${command.name}`;
			desc += `${command.description}`;
		}

		command.forEach(c => {
			const command = require(`./${file}`);
			const embed = new Discord.RichEmbed();
			embed.setColor("GREEN");
			embed.addField(name, desc)
			return message.channel.send({ embed });
		});

	},
};