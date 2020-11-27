const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const coin = ['back','front'];

    const randomCoin = [Math.floor(Math.random() * coin.length)];

    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**COIN FLIP**')
        .setDescription(`**${randomCoin}**!!\nIf you made a bet, the heads win!`)
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)

    const embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**COIN FLIP**')
        .setDescription(`**${randomCoin}**!!\nIf you made a bet, the back side win!`)
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)

    if(randomCoin == 'front'){
        message.channel.send(embed);
    }
    else{
        message.channel.send(embed1);
    }

}