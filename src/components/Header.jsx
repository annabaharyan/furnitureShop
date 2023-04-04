import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { orderedProducts } from "../app/orderSlice";
import { Link } from "react-router-dom";
export default function Header({ shopingOpen, setShopingOpen }) {
  const orders = useSelector(orderedProducts);
  const totalAmount = orders.reduce((sum, item) => {
    sum += item.orderedCount;
    return sum;
  }, 0);

  return (
    <header>
      <div className="navigation">
        <span className="logo">
          <Link to="/">Ann's Shop</Link>
        </span>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contacts</Link>
          </li>
          <li>
            <Link to="cabinet">Cabinet</Link>
          </li>
        </ul>
        <div className="shoping">
          <div className="card">
            <span className={totalAmount > 0 ? "amount not-empty" : "amount"}>
              {totalAmount ? totalAmount : ""}
            </span>
            <MdAddShoppingCart
              onClick={() => setShopingOpen(!shopingOpen)}
              className={shopingOpen ? "shop active" : "shop"}
            />
          </div>

          {shopingOpen ? (
            <Modal shopingOpen={shopingOpen} setShopingOpen={setShopingOpen} />
          ) : null}
        </div>
      </div>
     
    </header>
  );
}
