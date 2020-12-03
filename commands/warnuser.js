const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    message.channel.send(warnuser.join(" || ") ? warnuser.join(" || ") : "경고받은 사람 없음")
}