// import node's native file system module (https://nodejs.org/api/fs.html)
const fs = require('fs');
const Discord = require('discord.js');

const { prefix, token, hypixel } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// Get command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Hello World!');
});

client.on('message', async (message) => {
	// ignore messages without prefixes + TODO: Add docs for message.author.bot
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// slices of the prefix and splits message into an array
	const args = message.content.slice(prefix.length).split(' ');

	// moves array into lowercase
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// login to Discord with your app's token
client.login(token);