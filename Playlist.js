export default class Playlist {
  constructor(name, songs = []) {
    this.name = name;
    this.songs = songs;
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong() {
    this.songs.pop(song);
  }

//   shuffleSongs(song) {
//     let shuffledSongs = this.songs.slice();
//     for (let i = shuffledSongs.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j],shuffledSongs[i]];
//     }
//     return shuffledSongs;
//   }
}
