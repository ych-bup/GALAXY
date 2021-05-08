const Discord = require("discord.js");
const request = require('request');

exports.run = async(client, message, args) => {

    var hangang_url = "https://api.hangang.msub.kr";

    request(hangang_url, function(error,response,body) {
        if(!error && response.statusCode == 200) {
            var obj = JSON.parse(body);

            const hangang_embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username}`,`${message.author.displayAvatarURL()}`)
                .setColor('RANDOM')
                .setTitle(`**${obj.temp}℃**`)
                .setDescription(`Observed on **${obj.station}** at **${obj.time}**`)
                .setImage('https://cdn.blog.ivlis.kr/data/other-services/hangang.ivlis.kr-bg.jpg')
                .setFooter('힘내요!!')

            message.channel.send(hangang_embed);
        }
    })

}