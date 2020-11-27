const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const textEM = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**Text Command Help**')
        .addField('**help**', 'help about this bot.')
        .addField('**ang**', 'Gimothi!')
        .addField('**ping**', 'pong!')
        .addField('**calc**', 'Calculation.')
        .addField('**search**', 'search on WolframAlpha.')
        .setFooter('Guild Prefix is '+'\`\`'+prefix+'\`\`')
    message.channel.send(textEM);
}
