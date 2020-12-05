const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const fuck = message.content.split(" ").slice(1).join(" ");
    let e = await warnuser.findOne({ serverid: message.guild.id, userid: fuck })
    if(!e) return message.channel.send('❌ Don\'t exist.');

    try{
        warnuser.find({userid:fuck}).deleteMany().exec()
        message.channel.send(':white_check_mark: Success.')
    }
    catch(err) {
        message.channel.send('Failed.')
        console.log(err);
    }
}