const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
    console.log("Hello, world.");
});

client.on("message", (message) => {
    if (message.content === "hello") {
        message.reply("OK, Boomer.");
    }
    
    // Type "hello" into a discord chat that the bot has access to type in..
});

client.login(""); // Bot Token
