import React from "react";
import "./pagination.css";

export const Pagination = ({
  rowsPerPage,
  totalRows,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => {
        return (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
            onClick={() => paginate(number)}
          >
            <div className="page-link">{number}</div>
          </li>
        );
      })}
    </div>
  );
};
