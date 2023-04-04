import React from "react";
import { useDispatch } from "react-redux";
import { decrement, deleteItem, increment } from "../app/orderSlice";
import { MdDeleteOutline } from "react-icons/md";
export default function OrderedItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="ordered-product-wrapper">
      <div>
        <img src={require(`../images/img/${item.img}`)} alt="product" />
        <h2>{item.title}</h2>
      </div>
      <div className="order-btns">
        <button
          onClick={() => dispatch(decrement(item.id))}
          className="mybutton order-btn"
        >
          -
        </button>
        <span>{item.orderedCount}</span>
        <button
          onClick={() => dispatch(increment(item.id))}
          className=" mybutton order-btn"
        >
          +
        </button>
      </div>
      <span> {(item.price * item.orderedCount).toFixed(2)}$</span>
      <MdDeleteOutline onClick={() => dispatch(deleteItem(item.id))} className="delete-btn" />
    </div>
  );
}
