const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', (message) => {
    if(message.author.id == '189045589000978432') {
        message.react('🏳️‍🌈');
    }
});
bot.login('NjkxMzE5Mzg5MDY4MzI4OTcw.XnePlQ.1xEgExvD2vbL1iF9uO_vfKGXLdk');

