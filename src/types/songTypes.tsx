export interface SongCardProps {
  title: string;
  artist: string;
  album: string;
  imageUrl: string;
}
export interface SongCardsGridProps {
  songs: SongCardProps[];
}
