const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(message.guild.id == '731875375466020996'){
        return message.channel.send('Here is my home ~😘')
    }
    message.channel.send('🎉 **CH-07** official server!\nhttps://discord.gg/Jj8MB7UUAP')
}