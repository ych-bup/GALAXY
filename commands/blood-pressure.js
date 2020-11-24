const Discord = require('discord.js');
const mongoose = require('mongoose');

exports.run = async(client, message, args) => {
    const userDATA = mongoose.model('userDATA', new mongoose.Schema({
        serverid: String,
        lowPressure: Number,
        userName: String
    }));

    const args1 = message.content.split(" ").slice(2);


    let userdata = await userDATA.find({ serverid: message.guild.id })

    userdata = userdate.map(element => element.lowPressure)

    try{
        await new userDATA({ serverid: message.guild.id, lowPressure: args1, userName: message.author.username }).save();
    
        
    }
    catch(err) {
        console.log(err);
        message.channel.send(':x: Something wrong.');
    }

    userdata.forEach(element => {
        message.channel.send(element);
    })
}