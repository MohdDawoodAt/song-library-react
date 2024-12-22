import { createContext, useContext, useState } from "react";
import { Song } from "../../../types/songTypes";

interface SearchContextData {
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchResults: Song[] | null;
  setSearchResults: (results: Song[] | null) => void;

  setIsSearching: (searching: boolean) => void;
  isSearching: boolean;
}
const SearchContext = createContext<SearchContextData | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Song[] | null>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchResults,
        setSearchResults,
        isSearching,
        setIsSearching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
