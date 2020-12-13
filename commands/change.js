const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const args1 = message.content.split(" ").slice(1)
    const newCustom = args1.join(" ");

    if(!newCustom) return message.channel.send('❌ **INVALID COMMAND** \`\`\`'+ prefix + 'change [ custom status ]\`\`\`');
    if(!message.author.id == '602011789408075777') return message.channel.send('❌ This command can use only bot developer.');
    
    try{
        await customStatus.updateOne({custom: newCustom});
    }
    catch(err){
        console.log(err);
        message.channel.send('❌ ***ERROR*** \`\`\`'+err+'\`\`\`');
    }

    const embedPF = new Discord.MessageEmbed()
        .setColor('#0067A3')
        .setDescription('Successfully set custom status => \`\`'+newCustom+'\`\`')
    await message.channel.send(embedPF);
}