const Discord = require('discord.js');
const { ReactionCollector } = require('discord.js-collector');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(":x: You don't have permission!");

    const botMessage = await message.channel.send('🤨 Are you sure? You can\'t undo!');

    ReactionCollector.question({
        botMessage,
        user: message.author,
        reactions: {
           '✅': async () => await message.channel.delete(),
           '❌': async () => await message.channel.send(':white_check_mark: Operation cancelled.') 
        }
    });
}