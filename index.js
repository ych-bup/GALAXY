const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');
const mongoose = require('mongoose');

const client = new Discord.Client();

mongoose.connect("mongodb+srv://ych-bup:ych-bup@cluster0.oyp5x.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connecting', function () { console.log('MongoDB: Trying to connect to MongoDB');});
mongoose.connection.on('connected', function () { console.log('MongoDB: Successfully connected to MongoDB');});
mongoose.connection.on('error', function (err) { console.log('MongoDB: ERROR connecting to MongoDB' + ' - ' + err);  });
mongoose.connection.on('close', function (err) { console.log('MongoDB: Connection closed');});
mongoose.connection.on('reconnected', function () { console.log('MongoDB: Database link was reconnected');});
mongoose.connection.on('disconnected', function () { console.log('MongoDB: Connection ended');});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});

const guildprefix = mongoose.model('guildprefix', new mongoose.Schema({
    serverid: String,
    prefix: String
}));

global.guildprefix = guildprefix

client.on('message', async message => {
    if(message.author.bot) return message.channel.send(':x: You can\'t do that!');

    const prefixmap = await guildprefix.findOne({ serverid: message.guild.id }) || { prefix: '%' };
    let prefix = prefixmap.prefix
    global.prefix = prefix

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if(!client.commands.has(command)) return;
    
    if(message.content.indexOf(prefix) !== 0) return;

    try {
        cmd.run(client, message, args);
    } 
    catch (err) {
        const errEmbed = new Discord.MessageEmbed()
            .setColor('#FF4500')
            .setTitle('ERROR')
            .setDescription('Something wrong! Error will send to developer.')
            .setTimestamp()
        message.channel.send(errEmbed);
        console.log(err);
        client.users.cache.get('602011789408075777').send('\`\`\`' + err + '\`\`\`');
    }
});

client.commands = new Enmap();

client.on('ready', async () => {
    console.log('Hosting Success!');
    client.user.setActivity(`Have some error...`)
})

client.on('guildMemberAdd', async member => {
        if(member.guild.id == '749595288280498188') return;
        const channel = member.guild.channels.cache.find(ch => ch.name === 'traffic');
        if(!channel) return client.users.cache.get(member.id).send(embed);
        const embed = new Discord.MessageEmbed()
            .setColor('#FF4500')
            .setTitle(`***WELCOME TO ${member.guild.name}!***`)
            .setThumbnail(`${member.guild.iconURL({ format: 'png', size: 128 })}`)
            .setDescription(`Welcome to the server, **${member.displayName}**!\nPlease read the rules!\nWe have ${member.guild.memberCount} members now!`)
            .setFooter(`${member.displayName}`, `${member.user.displayAvatarURL()}`)
        channel.send(embed);
});

client.on('guildMemberRemove', async member => {
        if(member.guild.id == '749595288280498188') return;
        const channel = member.guild.channels.cache.find(ch => ch.name === 'traffic');
        if(!channel) return client.users.cache.get(member.id).send(embed);
        const embed = new Discord.MessageEmbed()
            .setColor('#0067a3')
            .setTitle(`***Bye bye!***`)
            .setDescription(`See you later, **${member.displayName}**\nWe are ${member.guild.memberCount} members now!`)
            .setThumbnail(`${member.guild.iconURL({format:'png'})}`)
            .setFooter(`${member.displayName}`,`${member.user.displayAvatarURL()}`)
            .setTimestamp()
        channel.send(embed);
});

client.login('NzgwNDA4MTM2NDYwNDAyNzM4.X7uptw.MgV_ua4MX4UOHpX4ie_T0Tz9uMw');