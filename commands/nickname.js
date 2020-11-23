const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first(); 
    const nickname = message.content.split(" ").slice(2).join(" ");
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`❌ You don't have permission.`);
    if(!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`❌ I don't have permission.`);
    if(!user || !nickname) return message.channel.send(`❌ **INVALID** \`\`\`` + prefix + `nickname [user] [reason]\`\`\``);
    if(!user &&!nickname) return message.channel.send(`❌ **INVALID** \`\`\`` + prefix + `nickname [user] [reason]\`\`\``);
    if(user && nickname){
        try { 
            user.setNickname(nickname);
            message.channel.send(`:white_check_mark: **${user.user.username}** is now **${nickname}**`);
            
        } 
        catch (err){
            return message.channel.send(`:x: \`\`\`${err}\`\`\``);
        }
    }  
}