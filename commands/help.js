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
        .setThumbnail(`https://images-ext-1.discordapp.net/external/Vk8OwWQbmZ9T7PWSvc7l4Z6IQ0KCuFJsgoCFHqGIfgU/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/780408136460402738/be0ac2bc8b228bac9fc21e82740e2c30.png?width=601&height=601`)
        .setFooter(`${message.author.username}`,`${message.author.displayAvatarURL()}`)
        .setTimestamp()
    message.channel.send(originalEM);
}