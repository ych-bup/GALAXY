const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const message1 = ["1","2","3","4","5","6","7","8","9","10"];
    const message2 = ["1","2","3","4","5","6","7","8","9","10"];
    const message3 = ["1","2","3","4","5","6","7","8","9","10"];

    const aaa = message1[Math.floor(Math.random() * message1.length)];
    const bbb = message2[Math.floor(Math.random() * message2.length)];
    const ccc = message3[Math.floor(Math.random() * message3.length)];

    const JackPot1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**JACKPOT**')
        .setDescription('\`\`' + aaa+ '\`\` ' + '\`\`' + bbb + '\`\` ' + '\`\`' + ccc + '\`\`')
        .addField('JACK POT!!!!','Have a good Day!!!')
        .addField('OHHHHHH!','You bit about **0.1%**!!')
        .setThumbnail('https://image.freepik.com/free-vector/big-win-777-lottery-vector-casino-concept-with-slot-machine-win-jackpot-game-slot-machine-illust_53562-4198.jpg')
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)    
    
    const JackPot = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**JACKPOT**')
        .setDescription('\`\`' + aaa+ '\`\` ' + '\`\`' + bbb + '\`\` ' + '\`\`' + ccc + '\`\`')
        .addField('Good Luck!','Have a good Day!')
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)

        
    if(aaa == "7" && bbb == "7" && ccc == "7"){
        return message.channel.send(JackPot1);
    }
    else{
        return message.channel.send(JackPot);
    }
}
