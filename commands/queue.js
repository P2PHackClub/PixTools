module.exports = {
    name: 'queue',
    description: 'Puts games in a queue',
    execute(message, args) {
        const Discord = require("discord.js");
        const { prefix } = require("../config.json");

        const client = new Discord.Client();

        const queue = new Map();

        client.once("ready", () => {
        console.log("Ready!");
        });

        client.once("reconnecting", () => {
        console.log("Reconnecting!");
        });

        client.once("disconnect", () => {
        console.log("Disconnect!");
        });

        client.on("message", async message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const serverQueue = queue.get(message.guild.id);

        if (message.content.startsWith(`${prefix}queue`)) {
            execute(message, serverQueue);
            return;
        } else if (message.content.startsWith(`${prefix}gamefinish`)) {
            skip(message, serverQueue);
            return;
        } else if (message.content.startsWith(`${prefix}stop`)) {
            stop(message, serverQueue);
            return;
        } else {
            message.channel.send("You need to enter a valid command!");
        }
        });

        async function execute(message, serverQueue) {
        const args = message.content.split(" ");

        

        if (!serverQueue) {
            const queueContruct = {
            textChannel: message.channel,
            game: "nani"
            };

            queue.set(message.guild.id, queueContruct);
            queueContruct.games.push(games);

        } else {
            serverQueue.games.push(game);
            return message.channel.send(`${game.title} has been added to the queue!`);
        }
        }

        function skip(message, serverQueue) {
        if (!serverQueue)
            return message.channel.send("There is no game that I could skip!");
        serverQueue.connection.dispatcher.end();
        }

        function stop(message, serverQueue) {
        serverQueue.games = [];
        serverQueue.connection.dispatcher.end();
        }

        function play(guild, game) {
        const serverQueue = queue.get(guild.id);
        if (!game) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }

        serverQueue.textChannel.send(`Start playing: **${game.title}**`);
        }

        client.login(process.env.TOKEN);
    }

};
