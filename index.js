const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ych-bup:ych-bup@cluster0.oyp5x.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connecting', function () { console.log('MongoDB: Trying to connect to MongoDB');});
mongoose.connection.on('connected', function () { console.log('MongoDB: Successfully connected to MongoDB');});
mongoose.connection.on('error', function (err) { console.log('MongoDB: ERROR connecting to MongoDB' + ' - ' + err);  });
mongoose.connection.on('close', function (err) { console.log('MongoDB: Connection closed');});
mongoose.connection.on('reconnected', function () { console.log('MongoDB: Database link was reconnected');});
mongoose.connection.on('disconnected', function () { console.log('MongoDB: Connection ended');});

const client = new Discord.Client();

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

client.commands = new Enmap();

client.on('ready', async () => {
    console.log('Hosting Success!');
    client.user.setActivity(`CH-07 => Ich.BOT ...`)
})

client.login('NzgwNDA4MTM2NDYwNDAyNzM4.X7uptw.MgV_ua4MX4UOHpX4ie_T0Tz9uMw');