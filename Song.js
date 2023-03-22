export default class Song {
  constructor(title, artist, duration, genre) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.genre = genre;
  }
  addSong(song) {
    this.title.push(song);
    return this.title(song);
  }

  getTitle() {
    return this.title;
  }

  getArtist() {
    return this.artist 
  }

  getDuration() {
    return this.duration
  }

  getGenre() {
    return this.genre
  }


}

