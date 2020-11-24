const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const moderateEMd = new Discord.MessageEmbed()
        .setTitle('**Moderation Command Help**')
        .setColor('RANDOM')
        .addField('kick', 'kick mentioned member.')
        .addField('ban', 'ban mentioned member.')
        .addField('purge', 'delete messages.')
        .addField('mute', 'mute member(in text channels)')
        .addField('unmute', 'unmute member(in text channels)')
        .addField('nickname','change user\'s nickname.')
    message.channel.send(moderateEMd);
}
