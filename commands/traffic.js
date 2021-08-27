const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(message.author.hasPermission == 'ADMINISTRATOR') return message.channel.send(":x: You don't have permision!")

    const args1 = message.content.split(" ").slice(1);

    if(!message.guild.channels.cache.find(ch => ch.name === args1)) return message.channel.send(":x: Channel doesn't exist!");

    try{
        trafficChannel = args1;
        message.channel.send(`:white_check_mark: Traffic channel setup successful! channel-`);
    } catch(err) {
        message.channel.send(`***ERROR***\n\n\`\`\`${err}\`\`\``);
    }


}