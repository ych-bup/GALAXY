const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const args1 = message.content.split(" ").slice(1)
    const newPrefix = args1.join(" ");

    if(!newPrefix) return message.channel.send('Current prefix is \`\`' + prefix + '\`\`');
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`:x: You don't have permission!`)

    const test = await guildprefix.findOne({ serverid: message.guild.id });

    if(test == null) {
        await new guildprefix({ serverid: message.guild.id, prefix: newPrefix }).save();
    }
    else {
        await guildprefix.opdateOne({ serverid: message.guild.id }, { prefix: newPrefix });
    }

    const setPrefix = await guildprefix.findOne({ serverid: message.guild.id })

    const embedPF = new Discord.MessageEmbed()
        .setColor('#0067A3')
        .setDescription('Successfully set prefix => \`\`'+setPrefix.prefix+'\`\`')
    await message.channel.send(embedPF);
}