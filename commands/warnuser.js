const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('❌ You don\'t have permission.');

    let modlogs = await warnuser.find({ serverid: message.guild.id })

    modlogs = modlogs.map(element => element.userid)

    const usertag = client.users.cache.find(user => user.id === `${modlogs}`)

    message.channel.send(`${modlogs.join(" | ").substring(21) ? modlogs.join(" | ").substring(21) : "❌ No user."}`);
}