const Discord = require('discord.js');

exports.run = async(client, message, args) => {  
    let modlogs = await warnuser.find({ serverid: message.guild.id })

    modlogs = modlogs.map(element => element.userid)

    message.channel.send(`${modlogs.join(" | ").substring(21) ? modlogs.join(" | ").substring(21) : "No user."}`);
}