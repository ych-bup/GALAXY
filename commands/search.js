const Discord = require('discord.js');
const WolframAlphaAPI = require('wolfram-alpha-node');

exports.run = async(client, message, args) => {
    const waApi = WolframAlphaAPI("AG8A9R-JVXVP9E977");
    args = message.content.split(" ").slice(1);
    let Wolfram = args.join(" ");
    if(!Wolfram) return message.channel.send(`❌ No contents provided.`);
    try{
        const embed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('**Result**')
        .setDescription(`${await waApi.getSpoken(`${Wolfram}`)}`)
        .setFooter('Powered by WolframAlpha', `https://cdn.iconscout.com/icon/free/png-256/wolfram-alpha-2-569293.png`)
        message.channel.send(embed)
    }catch(err){
        message.channel.send(`❌ **ERROR** \`\`${err}\`\``);     
    }
}
