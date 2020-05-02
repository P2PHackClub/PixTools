const Discord = require("discord.js");
const client = new Discord.Client();

const { get } = require("snekfetch");
const { token, prefix, hypixel } = require("./config.json");

client.once("ready", () => {
    console.log("Hello, world.");
});

client.on("message", async(message) => {
    if (message.content === "hypixel online" || message.content === "Hypixel Online") {
        let { body } = await get(`https://api.hypixel.net/playerCount?key=${hypixel}`);
        message.channel.send(`There are **${body.playerCount.toLocaleString()} online** members.`);
    }
});

client.login(token);