const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    warnuser = warnuser.map(element => `**userid** : ${user.id}`)

    message.channel.send(warnuser[0]);
}