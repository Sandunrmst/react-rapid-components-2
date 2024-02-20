const Pagination = ({ currentPage, totalPages = 10, onPageChange }) => {
  function generateNoOfPages() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div className="mt-4 flex justify-center gap-2 ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="bg-orange-500 px-3 py-1 rounded-sm "
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {generateNoOfPages().map((pageNo) => (
        <button
          className={`px-3 py-1 rounded-sm bg-slate-300 ${
            currentPage === pageNo ? "bg-orange-600" : ""
          }`}
          key={pageNo}
          onClick={() => onPageChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="bg-orange-500 px-3 py-1 rounded-sm "
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
