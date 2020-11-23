exports.run = async(client, message, args) => {
    message.channel.send(`🤨 **${client.user.username}** is active on **${client.guilds.cache.size}** guilds!`);
}