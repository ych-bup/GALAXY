const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const funEM = new Discord.MessageEmbed()
    .setTitle('**Fun Command Help**')
    .setColor('RANDOM')
    .setThumbnail(client.user.displayAvatarURL({format: 'png',size: 1024}))
    .addField('**jackpot**','Jackpot!')
    .addField('**coinflip**','Front or Back?')
    .addField('**cmaker**','Couple maker!')
    .setFooter('Guild prefix is '+prefix)
    message.channel.send(funEM);
}