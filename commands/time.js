const Discord = require('discord.js');

exports.run = async(client,message,args) => {
    var newDate = new Date();
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Now it is...')
        .setDescription(newDate)
    
    message.channel.send(embed);
}