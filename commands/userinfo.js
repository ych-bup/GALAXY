const Discord = require('discord.js');
const moment = require('moment');

exports.run = async(client, message, args) => {
    let user = message.mentions.users.first();
    if(!user) {
        const embed0 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('UserInfo')
        .setDescription(`This is **${message.author.username}**'s info!`)
        .addFields(
            { name: '**Username**', value : `${message.author.username}`, inline: true},
            { name: '**Status**', value: `${message.author.presence.status}`, inline: true},
        )
        .addFields(
            { name: '**ID**', value: `${message.author.id}`, inline: true},
            { name: '**Account created on**', value: `${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (utc +0)`, inline: true},
        )
        .setThumbnail(message.author.avatarURL())
        .setTimestamp()
        .setFooter(`Command is used by ${message.author.username}`)
        return message.channel.send(embed0);
    }
// Creats an embed with information about the mentioned user
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('UserInfo')
    .setDescription(`This is **${user.username}**'s info!`)
    .addFields(
        { name: '**Username**', value : `${user.username}`, inline: true},
        { name: '**Status**', value: `${user.presence.status}`, inline: true},
    )
    .addFields(
        { name: '**ID**', value: `${user.id}`, inline: true},
        { name: '**Account created on**', value: `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (utc +0)`, inline: true},
    )
    .setThumbnail(`${user.displayAvatarURL()}`)
    .setFooter(`Command is used by ${message.author.username}`)
    message.channel.send(embed)
}