module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(client, message, args) {
		message.channel.send(`:ping_pong: **Ping!** Latency is **${Math.round(client.ping)} milliseconds.**`);
	},
};