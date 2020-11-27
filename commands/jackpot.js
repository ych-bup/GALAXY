const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const message1 = ["1","2","3","4","5","6","7","8","9","10"];
    const message2 = ["1","2","3","4","5","6","7","8","9","10"];
    const message3 = ["1","2","3","4","5","6","7","8","9","10"];

    const someMessage = message1[Math.floor(Math.random() * message1.length)];
    const someMessage1 = message2[Math.floor(Math.random() * message2.length)];
    const someMessage2 = message3[Math.floor(Math.random() * message3.length)];
    if(someMessage1 + someMessage2 + someMessage == 21){
        const JackPot1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**JACKPOT**')
        .setDescription('\`\`' + someMessage + '\`\` ' + '\`\`' + someMessage1 + '\`\` ' + '\`\`' + someMessage2 + '\`\`')
        .addField('JACK POT!!!!','Have a good Day!')
        .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)
        message.channel.send(JackPot1);
    }
    else{
        const JackPot = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('**JACKPOT**')
            .setDescription('\`\`' + someMessage + '\`\` ' + '\`\`' + someMessage1 + '\`\` ' + '\`\`' + someMessage2 + '\`\`')
            .addField('Good Luck!','Have a good Day!')
            .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)
        message.channel.send(JackPot);
    }
}