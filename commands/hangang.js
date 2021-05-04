const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    var requestURL = 'https://api.hangang.msub.kr/'

    const json = requestURL;
    const obj = JSON.parse(json);

    message.channel.send(obj.temp);
}