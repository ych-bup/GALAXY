const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const args1 = message.content.split(" ").slice(1);
    if(!message.member.hasPermission("BAN_MEMBERS")){
        const embed = new Discord.MessageEmbed()
        .setColor("#FF4500")
        .setDescription('❌ You can\'t use this command!')
        return message.channel.send(embed);
    }
    if(!message.guild.me.hasPermission("BAN_MEMBERS")){
        const embed0 = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setDescription(`❌ I don't have permission \`\`\`BAN_MEMBERS\`\`\`.`)
        return message.channel.send(embed0);
    }
    let userID = args1[0];
        message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser){
                const embem = new Discord.MessageEmbed()
                .setColor(`#FF4500`)
                .setDescription(`❌ That user isn't banned!`)
                return message.channel.send(embem);
            }
            message.guild.members.unban(bUser.user);
            if(message.guild.members.unban(bUser.user)){
                const embemm = new Discord.MessageEmbed()
                .setColor(`RANDOM`)
                .setDescription(`:white_check_mark: **${userID}** is now unbanned!`)
                message.channel.send(embemm);
            }
        })
    if(!userID){
        const embed1 = new Discord.MessageEmbed()
        .setColor(`#FF4500`)
        .setTitle('**INVALID COMMAND**')
        .setDescription(prefix + 'unban [user ID]')
        return message.channel.send(embed1);
    }
}