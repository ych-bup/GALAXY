const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const originalEM = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Help')
        .addFields(
            { name: 'textHelp', value: 'Text Command Help', inline: true },
            { name: 'infoHelp', value: 'Info Command Help', inline: true },
            { name: 'moderateHelp', value: 'Moderation Command Help', inline: true }
        )
        .setFooter(`${message.author.username}`,`${message.author.displayAvatarURL()}`)
        .setTimestamp()
    message.channel.send(originalEM);
}