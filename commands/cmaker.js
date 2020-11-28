const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mention.users.first();

    const percentage = Math.floor(Math.random() * 100);

    message.channel.send(`**${percentage}** of **${message.author.username}** loves **${user.username}** 💕~`)
}