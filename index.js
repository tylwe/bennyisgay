const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.author.id == '189045589000978432' || message.author.id == '320310862994866186') {
        message.react('🏳️‍🌈');
    }
});

bot.login(process.env.BOT_TOKEN); 