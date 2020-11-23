const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const infoEM = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Text Command Help')
        .addField(prefix + 'botinfo', 'show this bot\'s info.')
        .addField(prefix + 'read', 'prefix info.')
        .addField(prefix + 'user', 'show how many users use this bot.')
        .addField(prefix + 'guild', 'show how many servers this bot is active on.')
        .addField(prefix + 'userinfo', 'display userinfo and avatar.')
        .addField(prefix + 'serverinfo', 'display server info.')
        .addField(prefix + 'avatar', 'display user\'s avatar.')
        .addField(prefix + 'serverav', 'display server\'s icon.')
        .addField(prefix + 'ownerav', 'display guild owner\'s avatar.')
    message.channel.send(infoEM);    
}