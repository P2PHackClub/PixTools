module.exports = {
	name: 'online',
	description: 'Returns the number of players who are online on the Hypixel Network.',
	execute(client, message, args) {
		const fetch = require('node-fetch');
		const { hypixel } = require('../config.json');

		fetch(`https://api.hypixel.net/playerCount?key=${hypixel}`)
			.then(result => result.json())
			.then(({ playerCount }) => {
				message.channel.send(`There are **${playerCount}** on the Hypixel Network.`);

			});
	},
};