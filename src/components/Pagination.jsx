import React from "react";

function Pagination({ currentPage, totalPages, setPage, totalEntries, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalEntries);

  return (
    <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1038px] mt-[50px] max-md:mt-10 max-md:max-w-full">
      <div className="self-start text-lg tracking-normal text-gray-400">
        Mostrando datos {startIndex} a {endIndex} de {totalEntries} entradas
      </div>
      <nav
        className="flex gap-5 text-lg tracking-normal leading-none text-gray-700 whitespace-nowrap"
        aria-label="Pagination"
      >
        <button
          className="px-2.5 py-1.5 rounded bg-neutral-100"
          aria-label="Previous page"
          onClick={() => setPage(Math.max(currentPage - 1, 1))}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-2.5 ${
              currentPage === index + 1
                ? "text-white bg-indigo-600"
                : "bg-neutral-100"
            } rounded h-[25px] w-[25px]`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-2.5 py-1.5 rounded bg-neutral-100"
          aria-label="Next page"
          onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
        >
          &gt;
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
