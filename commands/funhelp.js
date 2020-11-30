const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const funEM = new Discord.MessageEmbed()
    .setTitle('**Help**')
    .setColor('RANDOM')
    .setDescription('Fun Command Help')
    .setThumbnail(client.user.displayAvatarURL())
    .addField('**jackpot**','Jackpot!')
    .addField('**coinflip**','Front or Back?')
    .addField('**cmaker**','Couple maker!')
    .setFooter('Guild prefix is '+prefix)
    message.channel.send(funEM);
}