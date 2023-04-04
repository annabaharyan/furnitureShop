import React from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, orderedProducts } from "../app/orderSlice";
import OrderedItem from "./OrderedItem";
import { Link } from "react-router-dom";

export default function Modal({ shopingOpen, setShopingOpen }) {
  const orders = useSelector(orderedProducts);
  const dispatch = useDispatch();
  const totalPrice = orders.reduce((sum, item) => {
    sum += item.orderedCount * item.price;
    return sum;
  }, 0);
  return (
    <ReactModal
      ariaHideApp={false}
      className="openShop"
      isOpen={shopingOpen}
      onRequestClose={() => setShopingOpen(!shopingOpen)}
    >
      {orders.length > 0 ? (
        <div>
          {orders.map((elem) => (
            <OrderedItem key={elem.id} item={elem} />
          ))}
          <h2 style={{ textAlign: "end", marginTop: "30px" }}>
            Total price: {totalPrice.toFixed(2)}$
          </h2>
          <div className="modal-btns">
            <button
              className="pay-btn del-btn"
              onClick={() => {
                setShopingOpen(false);
                dispatch(deleteAll());
              }}
            >
              Delete All
            </button>
            
              <Link to="register"> <button className="pay-btn" onClick={() => setShopingOpen(false)}>Go to pay</button></Link>
       
          </div>
        </div>
      ) : (
        "Shoping card is empty"
      )}
    </ReactModal>
  );
}
