const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    var moment = require('moment');

    require('moment-timezone');
    moment.tz.setDefault("Asia/Seoul");

    hour = message.content.split(" ").slice(1);
    min = message.content.split(":").slice(2);

    index = message.content.split(" ").slice(3).join(" ");

    const nowTime = new Discord.MessageEmbed()
        .setTitle(`**${index}**`)
        .setDescription(`Now **${hour}:${min}:00`)
        .setColor('RANDOM')
        .setFooter(message.author.username, message.author.displayAvatarURL())
    
    var hourSum = hour - moment().format("HH");
    var minSum = min - moment().format("mm");
    
    setTimeout(() => message.channel.send(nowTime),hourSum*600+minSum*60);
}