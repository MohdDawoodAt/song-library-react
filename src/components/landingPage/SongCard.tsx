import { Song } from "../../types/songTypes";

const SongCard = ({ name, artist, album, image, releaseDate }: Song) => {
  return (
    <div className="group bg-gray-700 text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition duration-300">
      <div className="overflow-hidden">
        <img
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-black-500">{artist}</p>
        <p className="text-black-400">Album: {album}</p>
        <p className="text-black-400">{releaseDate.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default SongCard;
