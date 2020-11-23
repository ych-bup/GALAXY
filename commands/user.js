exports.run = async(client, message, args) => {
    message.channel.send(`🤨 **${client.users.cache.size}** members use **${client.user.username}**!`);
}