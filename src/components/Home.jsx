import React, { useEffect } from "react";
import Products from "./Products";
import { getProducts, selectProducts } from "../app/productSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  let products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="banner"></div>
      <main>
        {products.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <Products />
        )}
      </main>
    </>
  );
}
