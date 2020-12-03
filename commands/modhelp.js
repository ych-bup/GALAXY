const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const moderateEM = new Discord.MessageEmbed()
        .setTitle('**Help**')
        .setColor('RANDOM')
        .setDescription('Moderation Command Help')
        .setThumbnail(client.user.displayAvatarURL())
        .addField('**kick**', 'kick mentioned member.')
        .addField('**ban**', 'ban mentioned member.')
        .addField('**purge**', 'delete messages.')
        .addField('**mute**', 'mute member(in text channels)')
        .addField('**unmute**', 'unmute member(in text channels)')
        .addField('**nickname**','change user\'s nickname.')
        .addField('**prefix**', 'change guild prefix')
        .setFooter(`Guild prefix is ${prefix}`)
    message.channel.send(moderateEM);
}