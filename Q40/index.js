function make_album(artist, title, tracks) {
    var album = {
        Artist: artist,
        Title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
function make_magician(name, albumInfo) {
    return { Name: name, Album: albumInfo };
}
var album4 = make_album("Rahat Fateh Ali Khan", "Back 2 Love");
var album5 = make_album("Strings", "Dhaani", 12);
var magician4 = make_magician("Ahmed Ali", album4);
var magician5 = make_magician("Sana Zahra", album5);
console.log(magician4);
console.log(magician5);
