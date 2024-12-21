import SongCard from "./SongCard";
import { Song } from "../../types/songTypes";
import { usePagination } from "./contexts/PaginationContext";
import { useEffect, useState } from "react";
import { fetchSongs } from "../../services/songs.service";
import { useSearch } from "./contexts/SearchContext";

const SongCardsGrid = () => {
  const { currentPage, setTotalPages } = usePagination();
  const [songs, setSongs] = useState<Song[] | null>(null);
  const { searchResults } = useSearch();
  // const fetchedSongs= fetchSongs(pagenumber)
  // setSongs(fetchedSongs)

  useEffect(() => {
    const getSongs = async () => {
      try {
        // setLoading(true);
        const data = await fetchSongs(currentPage); // Call the function here
        setSongs(data.songs);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        // setLoading(false);
      }
    };

    getSongs();
  }, [currentPage, searchResults, setTotalPages]);
  const displayedSongs = searchResults || songs;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pr-8 pl-8">
      {displayedSongs?.map((song, index) => (
        <SongCard
          key={index}
          name={song.name}
          artist={song.artist}
          album={song.album}
          image={song.image}
          releaseDate={song.releaseDate}
        />
      ))}
    </div>
  );
};

export default SongCardsGrid;
