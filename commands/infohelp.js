const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const infoEMd = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**Text Command Help**')
        .addField('**botinfo**', 'show this bot\'s info.')
        .addField('**read**', 'prefix info.')
        .addField('**user**', 'show how many users use this bot.')
        .addField('**guild**', 'show how many servers this bot is active on.')
        .addField('**userinfo**', 'display userinfo and avatar.')
        .addField('**serverinfo**', 'display server info.')
        .addField('**avatar**', 'display user\'s avatar.')
        .addField('**serverav**', 'display server\'s icon.')
        .addField('**ownerav**', 'display guild owner\'s avatar.')
        .setFooter(`Guild prefix is \`\`${prefix}\`\``)
    message.channel.send(infoEMd);    
}
