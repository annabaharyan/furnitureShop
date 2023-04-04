import React, { useState } from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { selectProducts } from "../app/productSlice";
import FilterProduct from "./FilterProduct";
import Search from "./Search";

export default function Products() {
  const products = useSelector(selectProducts);
  const [showFilter, setShowFilter] = useState(null);
  const [myProducts, setmyProducts] = useState(products);
  const filterToHigh = () => {
    setmyProducts(myProducts.slice().sort((a, b) => a.price - b.price));
  };
  const filterToLow = () => {
    setmyProducts(myProducts.slice().sort((a, b) => b.price - a.price));
  };
  function chooseCateg(cat) {
    if (cat !== "all") {
      return products.filter((elem) => elem.category === cat);
    }
    return products;
  }
  const filterByCategory = (categ) => {
    setmyProducts(chooseCateg(categ));
  };

  const searchItem = (searchText) => {
    if (!searchText) {
      setmyProducts(products);
    } else {
      let serchRes = products.filter(
        (prod) =>
          prod.title.toLowerCase().includes(searchText.toLowerCase()) ||
          prod.description.toLowerCase().includes(searchText.toLowerCase())
      );
      setmyProducts(serchRes);
    }
  };
  return (
    <div className="prods">
      <Search searchItem={searchItem} />
      <button
        onClick={() => {
          if (showFilter === null || showFilter === "closed") {
            setShowFilter("open");
          } else {
            setShowFilter("closed");
          }
        }}
        className="filter-btn"
      >
        Filter
      </button>
      {showFilter !== null && (
        <FilterProduct
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          filterToHigh={filterToHigh}
          filterToLow={filterToLow}
          filterByCategory={filterByCategory}
        />
      )}
      <main className="producst-wrapper">
        {products &&
          myProducts.map((prod) => <Item prod={prod} key={prod.id} />)}
      </main>
    </div>
  );
}
