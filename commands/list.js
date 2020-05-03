module.exports = {
    name: 'list',
    description: 'Returns the number of players who are online on the Hypixel Network.',
    execute(message, args) {
        const fetch = require('node-fetch');
        const { hypixel } = require('../config.json');

        fetch('https://api.hypixel.net/gameCounts?key=${hypixel}')
            .then(result => result.json())
            .then(({ games }) => {
                const obj = JSON.stringify(games);
                const listArr = data.map(obj => obj.games)
                message.channel.send(listArr);

            });
    },
};
