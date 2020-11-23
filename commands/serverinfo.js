const Discord = require('discord.js');
const moment = require('moment');

exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#ffc0cb')
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setThumbnail(message.guild.iconURL({ format: 'png'}))
    .addFields(
        { name: '**Server Name**', value: `${message.guild.name}`,inline : true},
        { name: '**Member Count**', value: `${message.guild.memberCount}`,inline : true},
        { name: '**Channels**', value: `${message.guild.channels.cache.size}`, inline: true},
    )
    .addFields(    
        { name: '**Emoji Count**', value: `${message.guild.emojis.cache.size}`,inline : true},
        { name: '**Role Count**', value: `${message.guild.roles.cache.size}`, inline : true},
        { name: '**Server Owner**', value: `${message.guild.owner.displayName}`,inline : true},
    )
    .addFields(
        { name: '**Server ID**', value: `${message.guild.id}`,inline : true},
        { name: `**Region**`, value: `${message.guild.region}`, inline: true},
        { name: `**Verification Level**`, value: `${message.guild.verificationLevel}`, inline: true},
        { name: `**Created At**`, value: `${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (utc +0)`, inline: true},
    )
    .setTimestamp()
    message.channel.send(embed)
}