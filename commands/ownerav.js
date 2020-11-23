const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const owner = message.guild.owner;
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`This is **${owner.user.username}**'s avatar!`)
    .setImage(`${owner.user.displayAvatarURL({format: "png", size: 1024})}`)
    .setTimestamp()
    message.channel.send(embed);
}