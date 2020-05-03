module.exports = {
	name: 'test',
	description: 'NULL',
	execute(client, message, args) {
		return message.channel.send(`${message.author}, This is just a test command.`);
	},
};