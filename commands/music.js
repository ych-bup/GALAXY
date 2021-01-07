const musicinfo = require('music-info');

exports.run = async(client, message, args) => {
    const title = message.content.split("/").slice(2).join(" ");
    const artist = message.content.split("/").slice(3).join(" ");
    const album = message.content.split("/").slice(4).join(" ");

    if(message.content.split(" ").slice(1) == 'song'){
        musicinfo.searchSong({title: title, artist: artist, album: album},1000).then(message.channel.send());
    }
    if(message.content.split(" ").slice(1) == 'album'){}
    if(message.content.split(" ").slice(1) == 'lyrics'){}
}