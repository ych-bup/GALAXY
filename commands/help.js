const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const originalEM = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .addFields(
            { name: 'textHelp', value: 'Text Command Help', inline: true },
            { name: 'infoHelp', value: 'Info Command Help', inline: true },
            { name: 'moderateHelp', value: 'Moderation Command Help', inline: true }
        )
        .setThumbnail(message.guild.me.displayAvatarURL())
        .setFooter(`${message.author.username}`,`${message.author.displayAvatarURL()}`)
        .setTimestamp()
    message.channel.send(originalEM);
}