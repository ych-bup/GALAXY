const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    if(!user){
        const embed1 = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`,`${message.author.displayAvatarURL()}`)
        .setTitle(`Here is **${message.author.username}**'s avatar!`)
        .setColor('#FF4500')
        .setImage(`${message.author.displayAvatarURL({format:'png', size:1024, dynamic: true})}`)
        .setTimestamp()
        return message.channel.send(embed1);
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`,`${message.author.displayAvatarURL()}`)
    .setColor('#FF4500')
    .setTitle(`Here is **${user.user.username}**'s avatar!`)
    .setImage(`${user.user.displayAvatarURL({format:'png', size:1024, dynamic:true})}`)
    .setTimestamp()
    message.channel.send(embed);
}