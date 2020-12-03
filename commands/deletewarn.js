const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    let e = await warnUser.findOne({ serverid: message.guild.id, userid: user.id })
    if(!e) return message.channel.send(':x: That user isn\'t warned.');
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':x: You don\'t have permission.');

    try{
        warnUser.find({userid: user.id}).deleteMany().exec()
        message.channel.send(':white_check_mark: Success!')
    } catch (Err) {
        console.log(Err);
        message.channel.send(':x: Failed.');
    }
}