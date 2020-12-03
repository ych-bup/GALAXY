const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    
    let modlogs = await warnuser.find({ serverid: message.guild.id })

    modlogs = modlogs.map(element => element.userid)

    message.channel.send(`${modlogs.join(" | ").substring(5) ? modlogs.join(" | ").substring(5) : "No user."}`);
}