const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const args1 = message.content.split(" ").slice(2);
    const reason1 = args1.join(" ");
    const user = message.mentions.members.first();

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':x: You don\'t have permission!');
    if(!reason1 || !user) return message.channel.send(`:x: **INVALID COMMAND** \`\`\`${prefix}warn [ mention ] [ reason ]\`\`\``);
    if(!reason1 && !user) return message.channel.send(`:x: **INVALID COMMAND** \`\`\`${prefix}warn [ mention ] [ reason ]\`\`\``);

    const successEM = new Discord.MessageEmbed()
        .setColor('#008080')
        .setDescription(`:white_check_mark: **${user.user.username}** is warned by **${message.author.tag}**! [${reason1}]`)
    
    try{
        await new warnuser({
            serverid: message.guild.id,
            usertag: user.tag,
            type: "warn",
            reason: reason1
        }).save()
    }
    catch(err) {
        console.log(err);
       message.channel.send(':x: Failed.');
    }

    try{
        message.channel.send(successEM);
        client.users.cache.get(user.id).send(`😥 You got warned from **${message.guild.name}** by **${message.author.username}**!\nBe careful!\n\`\`\`reason: ${reason1}\`\`\``);
    } catch(err){}

}