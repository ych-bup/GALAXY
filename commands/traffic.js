const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const args1 = message.content.split(" ").slice(1).join(" ");
    const channelname = message.guild.channels.cache.find(ch => ch.name === args1);
    
    if(!args1) return message.channel.send(":x: You don't enter channel name!");
    if(!channelname) return message.channel.send(":x: Channel doesn't exist!");
    if(!message.author.hasPermission == 'ADMINISTRATOR') return message.channel.send(":x: You don't have permision!")

    const test = await traffic.findOne({ serverid: message.guild.id });
    
    if(test==null){
        await new traffic({ serverid: message.guild.id, channelName: args1 }).save();
    }
    else {
        await new traffic.updateOne({ channelName: args1});
    }

    await message.channel.send(`:white_check_mark: Traffic channel setup successful! channel-#${test.channelName}`);




}