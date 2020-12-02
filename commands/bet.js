const Discord = require('discord.js');
const { MessageCollector } = require('discord.js-collector');

exports.run = async(client, message, args) => {
    const quiz = require('./quiz.json');
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    
    message.channel.send(item.question).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} got the correct answer!`);
            })
            .catch(collected => {
                message.channel.send('Looks like nobody got the answer this time.');
            });
    });
}