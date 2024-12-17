import SongCard from "./SongCard";
import { SongCardsGridProps } from "../../types/songTypes";

const SongCardsGrid = ({ songs }: SongCardsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {songs.map((song, index) => (
        <SongCard
          key={index}
          title={song.title}
          artist={song.artist}
          album={song.album}
          imageUrl={song.imageUrl}
        />
      ))}
    </div>
  );
};

export default SongCardsGrid;
