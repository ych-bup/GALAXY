const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const message1 = ["7"];
    const message2 = ["7"];
    const message3 = ["7"];

    const someMessage = message1[Math.floor(Math.random() * message1.length)];
    const someMessage1 = message2[Math.floor(Math.random() * message2.length)];
    const someMessage2 = message3[Math.floor(Math.random() * message3.length)];

    const JP777 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**JACKPOT**')
        .setDescription(`**${message.author.tag}** picked \`\`7\`\` \`\`7\`\` \`\`7\`\`!`)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()

    try{
        if(someMessage == someMessage1 == someMessage2 == 7){
            const JackPot1 = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('**JACKPOT**')
                .setDescription('\`\`' + someMessage + '\`\` ' + '\`\`' + someMessage1 + '\`\` ' + '\`\`' + someMessage2 + '\`\`')
                .addField('JACK POT!!!!','Have a good Day!!!')
                .addField('OHHHHHH!','You bit about **0.42%**!!')
                .setThumbnail('https://image.freepik.com/free-vector/big-win-777-lottery-vector-casino-concept-with-slot-machine-win-jackpot-game-slot-machine-illust_53562-4198.jpg')
                .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL()}`)
            client.users.cache.get('602011789408075777').send(JP777);
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
    catch(err){
        console.log(err);
        client.users.cache.get('602011789408075777').send(`\`\`\`${err}\`\`\``);
        message.channel.send('Something wrong.');
    }
}
