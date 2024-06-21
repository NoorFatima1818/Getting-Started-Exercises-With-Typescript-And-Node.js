
// define type for the object
interface Album {
    artist : string;
    title : string;
    tracks? : number
}


// function to create album
function make_album(artist:string, title:string, tracks?: number): Album{

    let album : Album= {

        artist: artist,
        title: title


    };

    if (tracks){

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

 