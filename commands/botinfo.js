const Discord = require('discord.js');
const moment = require('moment');

exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	    .setTitle('Bot Info')
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .addFields(
            { name: '**Made by**', value: 'ych.bup', inline: true},
            { name: '**Bot name**', value: `${client.user.username}`, inline: true},
            { name: '**Prefix**', value: `${prefix}`, inline: true},
        )
        .addFields(
            { name: '**Library**', value: 'discord.js', inline: true},
            { name: '**User Count**', value: `${client.users.cache.size}`,inline: true},
            { name: '**Guild Count**', value: `${client.guilds.cache.size}`, inline: true},
            { name: '**Created on**', value: `${moment.utc(client.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (utc +0)`, inline: true},
        )
	    .setTimestamp()
	    .setFooter('more update will be later!', `${client.user.displayAvatarURL()}`);
    message.channel.send(embed);
}