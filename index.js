// import node's native file system module (https://nodejs.org/api/fs.html)
const fs = require('fs');
require('dotenv').config();
// require the discord.js module
const Discord = require('discord.js');

const { Users } = require('./dbObjects');
const { Op } = require('sequelize');

const { prefix, hypixel } = require('./config.json');

// create a new Discord client
const client = new Discord.Client({ 
    disableEveryone: true,
    disabledEvents: [
        "GUILD_BAN_ADD", "GUILD_MEMBERS_CHUNK", "MESSAGE_DELETE_BULK"
    ],
    fetchAllMembers: true
});

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
    client.channels.get("706363592454176818").setName(`Servers: ${client.guilds.size}/100`);
	console.log(`Logged in as ${client.user.tag} and on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on("guildCreate", (guild) => {
    console.log(`[GUILD_CREATE]: Invited to ${guild.name}.`)
    client.channels.get("706363592454176818").setName(`Servers: ${client.guilds.size}/100`);
});

client.on("guildDelete", (guild) => {
    console.log(`[GUILD_DELETE]: Removed from ${guild.name}.`);
    client.channels.get("706363592454176818").setName(`Servers: ${client.guilds.size}/100`);
});

/*
client.on("raw", (raw) => {
    console.log(raw);
});
*/

client.on('message', async (message) => {
    // child_process commands go here

	// ignore messages without prefixes and messages from the bot itself
	if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

	// slices of the prefix and splits message into an array
	const args = message.content.slice(process.env.PREFIX.length).split(' ');

	// moves array into lowercase
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(client, message, args);
	} catch (error) {
        console.error(error);
        const embed = new Discord.RichEmbed();
        embed.setColor("RED");
        embed.addField("Error", error);
        client.channels.get("706367586039889920").send({embed});
		message.reply('There was an error trying to execute that command!');
	}
});

// login to Discord with your app's token
client.login(process.env.TOKEN);