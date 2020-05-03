const fs = require('fs');
const Discord = require("discord.js");

module.exports = {
	name: 'help',
	description: 'List all available commands.',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `Name: ${command.name}, Description: ${command.description} \n`;
		}

		const embed = new Discord.RichEmbed();
			embed.setColor("GREEN");
			embed.setTitle("PixTools Help Command");
			embed.setDescription(str);
		return message.channel.send({ embed });
		// message.channel.send(str);
	},
};