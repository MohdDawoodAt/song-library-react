interface SearchBarProps {
  onSearch: () => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="flex items-baseline w-full justify-center mx-auto  rounded-md overflow-hidden m-4">
      <input
        type="text"
        placeholder="Search for songs"
        className=" focus:outline-none focus:ring-4 focus:ring-yellow-400 p-3 pr:4 pl-8 "
      />

      <button
        type="button"
        onClick={onSearch}
        className=" left-2 mx-1 top-1/2 align transform  text-white p-2  hover:text-yellow-500 "
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
