const Discord = require('discord.js');
const mongoose = require('mongoose');
const client1 = new Discord.Client();

exports.run = async(client, message, args) => {
    client1.on('message', async(msg) => {
        msg.channel.send('Success!');
    })
}