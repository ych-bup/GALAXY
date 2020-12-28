const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`**${message.guild.name}**'s icon!`)
    .setImage(message.guild.iconURL({format: 'png', size: 1024, dynamic: true}))
    .setTimestamp()
    message.channel.send(embed);
}