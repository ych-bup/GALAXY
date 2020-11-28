const Discord = require('discord.js');
const { max } = require('moment');

exports.run = async(client, message, args) => {
    const user = message.mentions.users.first();

    const percentage = Math.floor(Math.random() * (100));

    try{
        message.channel.send(`**${percentage}%** of **${message.author.tag}** loves **${member.tag}** 💕~`)
    }
    catch(err) {
        console.log(err);
    }
}