const Discord = require('discord.js');
const WolframAlphaAPI = require('wolfram-alpha-node');

exports.run = async(client, message, args) => {
    const waApi = WolframAlphaAPI("AG8A9R-JVXVP9E977");
    const args1 = message.content.split(" ").slice(1);
    let Wolfram = args1.join(" ");
    if(!Wolfram) return message.channel.send(`❌ No equation provided.`);
    try{
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**Result**')
        .setDescription(`\`\`\`${await waApi.getShort(`${Wolfram}`)}\`\`\``)
        message.channel.send(embed)
    }catch(err){
        message.channel.send(`❌ **ERROR** \`\`${err}\`\``);     
    }
}