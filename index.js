const Discord = require("discord.js");
const client = new Discord.Client();

const { get } = require("snekfetch");
const { token, prefix, hypixel } = require("./config.json");

client.once("ready", async() => {
    console.log("Hello, world.");
    let { body } = await get(`https://api.hypixel.net/playerCount?key=${hypixel}`);
    client.user.setActivity(`${body.playerCount.toLocaleString()} Players`, {
        type: "WATCHING"
    });
});

async function update() {
    let { body } = await get(`https://api.hypixel.net/playerCount?key=${hypixel}`);
    client.user.setActivity(`${body.playerCount.toLocaleString()} Players`, {
        type: "WATCHING"
    });
};

setInterval(update, 10000);

client.on("message", async(message) => {
    if (message.content === "hypixel online" || message.content === "Hypixel Online") {
        let { body } = await get(`https://api.hypixel.net/playerCount?key=${hypixel}`);
        message.channel.send(`There are **${body.playerCount.toLocaleString()} online** members.`);
    }
});

client.login(token);