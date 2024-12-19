export interface Song {
  name: string;
  artist: string;
  album: string;
  image: string;
}
export interface SongCardsGridProps {
  songs: Song[];
}
