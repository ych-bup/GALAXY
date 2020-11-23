const Discord = require('discord.js');
const Canvas = require('canvas');

exports.run = async(client, message, args) => {
    const user = message.mentions.users.first();
    const canvas = Canvas.createCanvas(700,250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://discordjs.guide/assets/img/8CQvVRV.cced9193.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`Welcome to ${message.guild.name},`, canvas.width / 2.5, canvas.height / 3.8);

    ctx.font = '60px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${user.username}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(user.displayAvatarURL({format :'png'}));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'https://discordjs.guide/assets/img/8CQvVRV.cced9193.png');
    
    
    
    message.channel.send(`Just Test, **${user}**!`, attachment);
}