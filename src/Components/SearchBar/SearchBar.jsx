import React from "react";
import "./searchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search by name or form" />
      </div>
    </div>
  );
}
