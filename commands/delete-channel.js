const Discord = require('discord.js');
const { ReactionCollector } = require('discord.js-collector');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(":x: You don't have permission!");

    const botMessage = await message.channel.send('🤨 Are you sure? You can\'t undo!');

    if(await ReactionCollector.yesNoQuestion({ botMessage, user: message.author })){
        await message.channel.delete();
        await message.users.cache.get(message.author.id).send(':white_check_mark: Success!');
    }
    else{
        await message.channel.send(':white_check_mark: Operation cancelled.');
    }
}