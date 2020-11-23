const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const reason = message.content.split(" ").slice(2).join(" ");

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(':x: You don\'t have permission!');
    if(!user || !reason) return message.channel.send(':x: **INVALID COMMAND**' + '\`\`\`' + prefix + 'kick [mention] [reason]' + '\`\`\`');
    if(!user && !reason) return message.channel.send(':x: **INVALID COMMAND**' + '\`\`\`' + prefix + 'kick [mention] [reason]' + '\`\`\`');
    if(user && reason) {
        const member = message.guild.member(user);
        const userID = member.id;

        if(member){
            member
            .kick("Optional reason that will display in the audit logs")
            .then(() => {
                const kickEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`:white_check_mark: **${user.user.username}** is kicked by **${message.author.tag}**! [${reason}]`)
                message.channel.send(kickEmbed);
                client.users.cache.get(userID).send(`😥 You got kicked from **${message.guild.name}** by **${message.author.username}**!\n\`\`\`reason: ${reason}\`\`\``);
            })
            .catch(err => {
                const em = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`:x: \`\`\`${err}\`\`\``)
                return message.channel.send(em);
            });
        } else {
            message.channel.send('That user isn\'t in this guild!');
        }
    }
}