const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(message.author.bot) return;
    const user = message.mentions.members.first();
    const role = message.guild.roles.cache.find(r => r.name === 'Muted');
    const embed2 = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setDescription(`:white_check_mark: **${user.displayName}** is unmuted now!`)

    if(!message.member.hasPermission("KICK_MEMBERS")){
        const embed1 = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('**Oops!**')
        .setDescription('You can\'t unmute that user.')
        .setTimestamp()
        return message.channel.send(embed1);
    }
    if(!user.roles.cache.find(r => r.name === 'Muted')){
        const embed0 = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setDescription(`❌ He isn't muted!`)
        return message.channel.send(embed0);
    }
    if(user.roles.cache.find(r => r.name === 'Muted')){
        user.roles.remove(role).then(message.channel.send(embed2));
    }
}