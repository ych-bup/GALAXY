const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const reason = message.content.split(" ").slice(2).join(" ");
    var role = message.guild.roles.cache.find(r => r.name === 'Muted');
    if(user.user.bot){
        const eeee = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('❌ You cannot mute bot!')
        return message.channel.send(eeee);
    }
    if(!role) {
        try {
            role = await message.guild.roles.create({
                data:{
                    name: "Muted",
                    color: "#000000",
                    permissions: []
                }
            });
            message.guild.channels.cache.forEach(async (channel) => {
                await channel.createOverwrite(role,{
                        SEND_MESSAGES: false
                });    
            });
        } catch(error) {
            const em = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`\`\`\`${error}\`\`\``)
            return message.channel.send(em);
        }    
    }
    if(!message.guild.me.hasPermission('KICK_MEMBERS')){
        const eeeeeee = new Discord.MessageEmbed()
            .setColor('#FF4500')
            .setDescription("❌ I don't have permission.")
        return message.channel.send(eeeeeee);
    }
    if (!message.member.hasPermission("KICK_MEMBERS")){
        const embem = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setDescription("❌ You don't have permission.")
        return message.channel.send(embem);
    }
    if(!user || !reason){
        const ambed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('**INVALID COMMAND**')
        .setDescription(`${prefix}mute [mention] [reason]`)
        .setTimestamp()
        return message.channel.send(ambed);
    }
    if(!user && !reason){
        const eemm = new Discord.MessageEmbed()
            .setColor('#FF4500')
            .setTitle('**INVALID COMMAND**')
            .setDescription(`${perfix}mute [mention] [reason]`)
            .setTimestamp()
            return message.channel.send(eemm);
    }
    try{
        user.roles.add(role);
        const embed4 = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: **${user.user.username}** is now muted! [${reason}]`)
        .setColor('RANDOM')
        message.channel.send(embed4);
    }
    catch(Err){
        message.channel.send(':x: Something Wrong.\`\`\`'+ Err +'\`\`\`');
        console.log(Err);
    }
}