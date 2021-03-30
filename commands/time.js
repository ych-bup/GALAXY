const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    var moment = require('moment');

    require('moment-timezone');
    moment.tz.setDefault("Asia/Seoul");
    
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Now it is...')
        .setDescription(moment().format('YYYY-MM-DD HH:mm:ss'))

    message.channel.send(embed);
}