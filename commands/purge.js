const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const embed1 = new Discord.MessageEmbed()
    .setColor('#FF4500')
    .setTitle('**Oops!**')
    .setDescription(`You don't have permission to purge message!`)
    .setTimestamp()
    if (message.channel.type == "dm") return;

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed1);
    const args1 = message.content.split(' ').slice(1); 
    const amount = args1.join(' '); 
    const extranum = "1"
    const amountaa = parseInt(amount)
    const extranumaa = parseInt(extranum)
    const messageamount = amountaa + extranumaa

    if (!amount) return message.reply('Tell me how many messages should I purge!'); 
    if (isNaN(amount)) return message.reply('Give me a number!'); 

    if (amount > 99) return message.reply("❌ Too many messages to purge! Give me a smaller number."); 
    if (amount < 1) return message.reply("❌ You can't purge less than 1 message! Give me a bigger number."); 

    message.channel.messages.fetch({ limit: messageamount }).then(messages => {
        message.channel.bulkDelete(messages)
        .catch(err => 
            message.reply("error"))
    })
}
