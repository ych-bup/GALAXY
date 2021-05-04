const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    var requestURL = 'https://api.hangang.msub.kr/'

    const obj = JSON.parse(requestURL);

    message.channel.send(obj.temp);

}