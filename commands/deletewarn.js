const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const fuck = message.mentions.members.first();
    let e = await warnuser.findOne({ serverid: message.guild.id, userid: fuck.user.id })
    if(!e) return message.channel.send('Don\'t exist.');

    try{
        warnuser.find({userid:fuck.user.id}).deleteMany().exec()
        message.channel.send('Success.')
    }
    catch(err) {
        message.channel.send('Failed.')
        console.log(err);
    }
}