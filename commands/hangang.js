const Discord = require("discord.js");
const request = require('request');

exports.run = async(client, message, args) => {

    var hangang_url = "https://api.hangang.msub.kr";
    var hangang_temp;
    var hangang_time;
    var hangang_station;

    request(hangang_url, function(error,response,body) {
        if(!error && response.statusCode == 200) {
            var obj = JSON.parse(body);
            console.log(obj);
        }
    })

}