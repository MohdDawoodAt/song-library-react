export interface SongCardProps {
  name: string;
  artist: string;
  album: string;
  image: string;
}
export interface SongCardsGridProps {
  songs: SongCardProps[];
}
