const Discord = require('discord.js');
const { max } = require('moment');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    if(!user) return message.channel.send('😘 The person who knows you best is you.');
    const percentage = Math.floor(Math.random() * (100));

    const embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Couple Maker')
        .setDescription(`**${message.author.username}** loves **${user.user.username}**,`)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/220px-Coraz%C3%B3n.svg.png')
        .addField(`**${percentage}%**!!`,`try hard!`)
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)

    const embed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Couple Maker')
        .setDescription(`**${message.author.username}** loves **${user.user.username}**,`)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/220px-Coraz%C3%B3n.svg.png')
        .addField(`**${percentage}%**!!`,`not bad!`)
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)
    
    const embed3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Couple Maker')
        .setDescription(`**${message.author.username}** loves **${user.user.username}**,`)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/220px-Coraz%C3%B3n.svg.png')
        .addField(`**${percentage}%**!!`,`you have a chance!`)
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)

    const embed4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Couple Maker')
        .setDescription(`**${message.author.username}** loves **${user.user.username}**,`)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/220px-Coraz%C3%B3n.svg.png')
        .addField(`**${percentage}%**!!`,`Ohh! Let's confess right now!`)
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)

    if(percentage <= 25){
        return message.channel.send(embed1);
    }
    else if(percentage <= 50){
        return message.channel.send(embed2);
    }
    else if(percentage <= 75){
        return message.channel.send(embed3);
    }
    else if(percentage <= 100){
        return message.channel.send(embed4);
    }
}