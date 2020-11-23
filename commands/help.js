const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const originalEM = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Help')
        .addField(prefix + 'textHelp', 'Text Command Help')
        .addField(prefix + 'infoHelp', 'Info Command Help')
        .addField(prefix + 'moderateHelp', 'Moderation Command help')
        .setFooter(`${message.author.username}`,`${message.author.displayAvatarURL()}`)
        .setTimestamp()
    message.channel.send(originalEM);
}