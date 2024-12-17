import { SongCardProps } from "../../types/songTypes";

const SongCard = ({ title, artist, album, imageUrl }: SongCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-500">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-black-500">{artist}</p>
        <p className="text-black-400">Album: {album}</p>
      </div>
    </div>
  );
};

export default SongCard;
