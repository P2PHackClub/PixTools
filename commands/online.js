module.exports = {
	name: 'online',
	description: 'Returns the number of players who are online on the Hypixel Network.',
	execute(message, args) {
		const fetch = require('node-fetch');
		const { hypixel } = require('../config.json');

		fetch(`https://api.hypixel.net/playerCount?key=` + hypixel)
			.then(result => result.json())
			.then(({ playerCount }) => {
				message.channel.send(`There are **${ playerCount }** on the Hypixel Network.`);

			});

		// console.log('https://api.hypixel.net/key?key=' + hypixel)
		// fetch('https://api.hypixel.net/key?key=' + hypixel)
		// 	.then(result => result.json())
		// 	.then(({ record }) => {
		// 		// Log the owner's player UUID
		// 		message.channel.send(record.ownerUuid);
		// 	}).catch(() => { console.log('ooooof'); });
	},
};