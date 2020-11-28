const Discord = require('discord.js');
const { max } = require('moment');

exports.run = async(client, message, args) => {
    const user = message.mention.users.first();

    const percentage = Math.floor(Math.random() * (100-0+1) + 0);

    message.channel.send(`**${percentage}%** of **${message.author.username}** loves **${user.username}** 💕~`)
}