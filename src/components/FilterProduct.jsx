import React from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../app/productSlice";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";

export default function FilterProduct({
  showFilter,
  setShowFilter,
  filterToHigh,
  filterToLow,
  filterByCategory,
}) {
  const categories = useSelector(selectCategory);

  return (
    <div
      className={
        showFilter === "open"
          ? "category category-open"
          : "category category-closed"
      }
    >
      <div>
        <RiSortAsc onClick={filterToHigh} />
        <RiSortDesc onClick={filterToLow} />
      </div>
      <div>
        <label htmlFor="products">Choose product category:</label>

        <select
          name="products"
          id="products"
          onChange={(e) => filterByCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option value={category.category} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={() => setShowFilter("closed")}>Save</button>
    </div>
  );
}
