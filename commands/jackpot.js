const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const message1 = ["7"];
    const message2 = ["7"];
    const message3 = ["7"];
    
        if(someMessage == someMessage1 == someMessage2 == "7"){
            const JackPot1 = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('**JACKPOT**')
                .setDescription('\`\`' + someMessage + '\`\` ' + '\`\`' + someMessage1 + '\`\` ' + '\`\`' + someMessage2 + '\`\`')
                .addField('JACK POT!!!!','Have a good Day!!!')
                .addField('OHHHHHH!','You bit about **0.42%**!!')
                .setThumbnail('https://image.freepik.com/free-vector/big-win-777-lottery-vector-casino-concept-with-slot-machine-win-jackpot-game-slot-machine-illust_53562-4198.jpg')
                .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)
            return message.channel.send(JackPot1);
        }
        else{
            const JackPot = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('**JACKPOT**')
                .setDescription('\`\`' + someMessage + '\`\` ' + '\`\`' + someMessage1 + '\`\` ' + '\`\`' + someMessage2 + '\`\`')
                .addField('Good Luck!','Have a good Day!')
                .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)
            return message.channel.send(JackPot);
        }
}
