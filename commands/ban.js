const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const user = message.mentions.members.first();
    const reason = message.content.split(" ").slice(2).join(" ");
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: You don\'t have permission!');
    if(!user || !reason) return message.channel.send(':x: **INVALID COMMAND**' + '\`\`\`' + prefix + 'ban [mention] [reason]' + '\`\`\`');
    if(!user && !reason) return message.channel.send(':x: **INVALID COMMAND**' + '\`\`\`' + prefix + 'ban [mention] [reason]' + '\`\`\`');
    if (user && reason) {
        const member = message.guild.member(user);
        const userID = member.id;
        if (member) {
            member
            .ban({
                reason: `${reason}`,
            })
            .then(() => {
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`:white_check_mark: **${user.user.username}** is banned by **${message.author.username}**! [${reason}]`)
                message.channel.send(embed)
                client.users.cache.get(userID).send(`😥 You got banned from **${message.guild.name}** by **${message.author.username}**!\n\`\`\`reason: ${reason}\`\`\``);
            })
            .catch(err => {
                const embedasdf = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`❌ \`\`\`${err}\`\`\``)
                return message.channel.send(embedasdf);
            });
        } else {
            message.reply("That user isn't in this guild!");
        }
    }
}