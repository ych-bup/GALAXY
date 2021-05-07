const Discord = require("discord.js");
const request = require('request');

exports.run = async(client, message, args) => {

    var hangang_url = "https://api.hangang.msub.kr";
    var hangang_temp;
    var hangang_time;
    var hangang_station;

    request({
        url: hangang_url,
        json: true,
    }, function (err,res, body) {
        if(!err && res.statusCode === 200) {
            var obj = JSON.parse(body);
            hangang_temp = obj.temp;
            hangang_time = obj.time;
            hangang_station = obj.station;
        }
    })

    message.channel.send(hangang_temp);

}