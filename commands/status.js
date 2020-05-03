require('dotenv').config();

module.exports = {
	name: 'status',
	description: 'Returns the status of the Hypixel API.',
	premiumOnly: true,
	execute(client, message, args) {
		const fetch = require('node-fetch');
		const { hypixel } = require('../config.json');

		fetch(`https://api.hypixel.net/key?key=${hypixel}`)
			.then(result => result.json())
			.then(({ success }) => {
				if(success == true) {
					message.channel.send('Successfully connected to the Hypixel API with your key!');
				}
				else {
					message.channel.send('Looks like your Hypixel key is incorrect. Try getting a new one by sending the "/api" command on hypixel.net. If that doesn\'t work, please try again later.');
				}

			});

	},
};