import library from "./library.js";
import Playlist from "./Playlist.js";
import Song from "./Song.js";

let newPlaylist = new Playlist("Jams")
let newSong = new Song('Songs')

let theSign = new Song("The Sign", "Ace of Base","3:10", "Europop" );
let iSwear = new Song("I Swear", "All-4-One", "4:18","Pop R&B");
let illMakeLoveToYou = new Song("I'll Make Love to You", "Boyz II Men", "3:56", "R&B");
let thePowerOfLove = new Song("The Power of Love", "Celine Dion", "5:42", "Pop");
let hero = new Song("Hero","Mariah Carey", "4:17", "Pop R&B");
let stayIMissedYou = new Song("Stay (I Missed You)", "Lisa Loeb and Nine Stories", "3:04", "Folk rock");
// let breathAgain = new Song("Breathe Again", "Toni Braxton", "4:29", "R&B");
// let allForLove = new Song("All for Love","Bryan Adams, Rod St, ewart, Sting", "4:45", "Arena rock");
// let allSheWants = new Song("All That She Wants", "Ace of Base", "3:30", "Dance-pop");
// let dontTurnAroound = new Song("Don't Turn Around", "Ace of Base","4:19", "Rock");

// newPlaylist.addSong(iSwear)

newSong.getTitle();
newPlaylist.addSong([theSign, iSwear, illMakeLoveToYou, thePowerOfLove, hero,
stayIMissedYou])
// console.log(newPlaylist.songs);

// newPlaylist.shuffleSongs([theSign, iSwear, illMakeLoveToYou, thePowerOfLove, hero,
// stay IMissedYou])

console.log(newSong.title);