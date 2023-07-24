/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import {
  PagesButton,
  PaginationButton,
  WrapperPagination,
} from "components/TravelsHistory/components/DataUI/DataUI.style";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PagesButton
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </PagesButton>
      );
    }
    return pageNumbers;
  };

  return (
    <WrapperPagination className="pagination">
      <PaginationButton onClick={handlePrevClick} disabled={currentPage === 1}>
        Anterior
      </PaginationButton>
      <div className="pages">{renderPageNumbers()}</div>
      <PaginationButton
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Próxima
      </PaginationButton>
    </WrapperPagination>
  );
}

export default Pagination;
