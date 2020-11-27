const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const funEM = new Discord.MessageEmbed()
    .setTitle('**Fun Command Help**')
    .setColor('RANDOM')
    .addField('**jackpot**','Jackpot!')
    .setFooter('Guild Prefix is '+'``'+prefix+'``')
    message.channel.send(funEM);
}