const Discord = require('discord.js');

exports.run = async(client, message, args) => {  
    let modlogs = await warnuser.find({ serverid: message.guild.id })

    modlogs = modlogs.map(element => element.userid)

    const warnUser = client.users.cache.find(user => user.id === modlogs)
    message.channel.send(`${warnUser[0].join(" | ").substring(21) ? warnUser[0].join(" | ").substring(21) : "No user."}`);
}