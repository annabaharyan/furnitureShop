import React from "react";

export default function Register() {
  return (
    <form>
      <div>
        <label htmlFor="">Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Address</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Phone Number</label>
        <input type="tel" />
      </div>
      <div>
        <p>Payment way</p>
        <div>
          <input type="radio" name="paymentWay" id="byCash" />
          <label htmlFor="byCash">Cash</label>
          <input type="radio" name="paymentWay" id="byCard" checked />
          <label htmlFor="byCard">Card</label>
        </div>
      </div>
    </form>
  );
}
