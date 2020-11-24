const Discord = require('discord.js');
const mongoose = require('mongoose');

exports.run = async(client, message, args) => {
    const userDATA = mongoose.model('userDATA', new mongoose.Schema({
        serverid: String,
        highPressure: Number,
        lowPressure: Number,
        userName: String
    }));

    const args1 = message.content.split(" ").slice(1);
    const args2 = message.content.split(" ").slice(2);

    message.channel.send(`${args1}\n${args2}`);
}