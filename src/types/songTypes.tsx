export interface Song {
  name: string;
  artist: string;
  album: string;
  image: string;
  releaseDate: string;
}
export interface SongCardsGridProps {
  songs: Song[];
}
