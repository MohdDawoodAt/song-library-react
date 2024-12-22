import { usePagination } from "./contexts/PaginationContext";
import { useSearch } from "./contexts/SearchContext";

const Pagination = () => {
  const { currentPage, totalPages, goToNextPage, goToPreviousPage } =
    usePagination();
  const { isSearching } = useSearch();

  if (isSearching) return null;

  return (
    <div className="flex justify-center items-center mt-8 space-x-4 p-2">
      <button
        className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 px-4 py-2 rounded-l disabled:bg-gray-400 min-w-24"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 px-4 py-2 rounded-r disabled:bg-gray-400 min-w-24"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
