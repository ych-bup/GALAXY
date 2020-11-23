const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const textEM = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Text Command Help')
        .addField(prefix + 'help', 'help about this bot.')
        .addField(prefix + 'ang', 'Gimothi!')
        .addField(prefix + 'ping', 'pong!')
        .addField(prefix + 'calc', 'Calculation.')
        .addField(prefix + 'search', 'search on WolframAlpha.')
    message.channel.send(textEM);
}