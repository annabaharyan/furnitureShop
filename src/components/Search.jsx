import React from "react";
import { CiSearch } from "react-icons/ci";
export default function Search({ searchItem }) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => searchItem(e.target.value)}
        className="search-input"
        placeholder="Search for product"
      />
      <CiSearch className="search-icon" />
    </div>
  );
}
