import { usePagination } from "./contexts/PaginationContext";
const Pagination = () => {
  const { currentPage, totalPages, goToNextPage, goToPreviousPage } =
    usePagination();

  return (
    <div className="flex justify-center items-center mt-8 space-x-4 p-2">
      <button
        className="bg-yellow-400  text-gray-800  hover:bg-yellow-500 px-4 py-2 rounded-l disabled:bg-gray-400 min-w-24"
        onClick={goToPreviousPage}
        disabled={currentPage === 1} // Disable button if on the first page
      >
        Previous
      </button>
      <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="bg-yellow-400 text-gray-800  hover:bg-yellow-500 px-4 py-2 rounded-r disabled:bg-gray-400 min-w-24"
        onClick={goToNextPage}
        disabled={currentPage === totalPages} // Disable button if on the last page
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
