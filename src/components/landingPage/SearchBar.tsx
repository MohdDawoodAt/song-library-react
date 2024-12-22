import { searchSong } from "../../services/songs.service";
import { usePagination } from "./contexts/PaginationContext";
import { useSearch } from "./contexts/SearchContext";

const SearchBar = () => {
  const {
    searchValue,
    setSearchValue,
    setSearchResults,
    setIsSearching,
    isSearching,
    searchResults,
  } = useSearch();
  const { setCurrentPage } = usePagination();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      console.log("Search bar is empty");
      return;
    }

    try {
      const results = await searchSong(searchValue);
      console.log("Received data in search bar:", results);

      setSearchResults(results);

      setIsSearching(true);
    } catch (error) {
      console.error("Error while searching for songs:", error);
    }
  };

  const clearSearch = () => {
    setSearchValue("");
    setSearchResults(null);
    setIsSearching(false);
    setCurrentPage(1);
  };

  return (
    <div className="flex items-baseline w-full justify-center mx-auto rounded-md overflow-hidden m-4">
      <input
        type="text"
        value={searchValue}
        placeholder="Search for songs"
        className="focus:outline-none focus:ring-4 focus:ring-yellow-400 p-3 pr-4 pl-8"
        onChange={handleInputChange}
      />
      <button
        type="button"
        onClick={handleSearch}
        className="mx-1 text-white p-2 hover:text-yellow-500"
      >
        Search
      </button>
      {searchValue && (
        <button
          type="button"
          onClick={clearSearch}
          className="text-gray-500 hover:text-red-500 px-3"
          aria-label="Clear search"
        >
          ✖
        </button>
      )}
      {isSearching && searchResults?.length === 0 && (
        <div className="text-gray-500 mt-4">
          No results found. Please try a different search term.
        </div>
      )}
    </div>
  );
};

export default SearchBar;
