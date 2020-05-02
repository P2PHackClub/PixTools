const Discord = require("discord.js");
const client = new Discord.Client();

const { get } = require("snekfetch");
const { token } = require("./config.json");

client.once("ready", () => {
    console.log("Hello, world.");
});

client.on("message", async(message) => {
    
});

client.login(token);