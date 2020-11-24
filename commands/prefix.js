const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const args1 = message.content.split(" ").slice(1)
    const newPrefix = args1.join(" ");

    if(!newPrefix) return message.channel.send('Current prefix is \`\`' + prefix + '\`\`');
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`:x: You don't have permission!`)
}