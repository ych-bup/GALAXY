const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Please Read!!')
        .setDescription('This bot has prefix, ' + '\`\`' + prefix + '\`\`')
    message.channel.send(embed);
}