const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const yourping = new Date().getTime() - message.createdTimestamp;
    const embed = new Discord.MessageEmbed()
        .setColor('#8b00ff')
        .setDescription(`🏓 Ping: ${client.ws.ping}ms / Latency: ${Math.abs(yourping)}ms`)
    message.channel.send(embed)
}

