const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const moderateEM = new Discord.MessageEmbed()
        .setTitle('**Moderation Command Help**')
        .setColor('RANDOM')
        .addField(prefix+'kick', 'kick mentioned member.')
        .addField(prefix+'ban', 'ban mentioned member.')
        .addField(prefix+'purge', 'delete messages.')
        .addField(prefix+'mute', 'mute member(in text channels)')
        .addField(prefix+'unmute', 'unmute member(in text channels)')
        .addField(prefix+'nickname','change user\'s nickname.')
        .addField(prefix+'prefix', 'change guild prefix')
    message.channel.send(moderateEM);
}