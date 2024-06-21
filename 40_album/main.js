"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function to create album
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
const album1 = make_album("Atif Aslam", "Meri Kahani");
const album2 = make_album("Ali Zafar", "Jhoom");
const album3 = make_album("Strings", "Durr", 10); // with tracks
console.log(album1);
console.log(album2);
console.log(album3);
