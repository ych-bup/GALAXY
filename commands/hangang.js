const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    const obj = JSON.parse("https://api.hangang.msub.kr");

    message.channel.send(obj.temp);

}