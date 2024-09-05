import React from "react";
import "./searchBar.css";

export default function SearchBar({ handleSearch }) {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search by name or form"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
