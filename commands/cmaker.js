const Discord = require('discord.js');
const { max } = require('moment');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();

    const percentage = Math.floor(Math.random() * (100));

    message.channel.send(`**${percentage}%** of **${message.author.username}** loves **${user}** 💕~`)
}