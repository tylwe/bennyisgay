const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.author.id == '189045589000978432') {
        message.react('🏳️‍🌈');
        message.author.send("youre gay");
    }
});

bot.login(process.env.BOT_TOKEN); 