import React from "react";
import { useDispatch } from "react-redux";
import { addtoOrder } from "../app/orderSlice";

export default function Item({ prod }) {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <img src={require(`../images/img/${prod.img}`)} alt="product" />
      <h3>{prod.title}</h3>
      <p>{prod.description}</p>
      <h3 className="price">Price {prod.price}$</h3>
      <button className="mybutton btn" onClick={() => dispatch(addtoOrder(prod))}>
        +
      </button>
    </div>
  );
}
