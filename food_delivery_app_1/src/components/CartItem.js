/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React from "react";
import { useStateValue } from "./StateProvider";

function CartItem({ name, imgSrc, price, itemId, quantity, id }) {
  const [{ cart }, dispatch] = useStateValue();

  const updateQuantityAdd = () => {
    dispatch({ type: "add", id });
    console.log("work");
  };
  const updateQuantityRemove = () => {
    dispatch({ type: "remove", id });
    console.log("work");
  };

  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>

        <div className="itemQuantity">
          <span>X {quantity}</span>

          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={updateQuantityRemove}
            />
            <AddRounded className="itemAdd" onClick={updateQuantityAdd} />
          </div>
        </div>
      </div>

      <p className="itemPrice">
        <span className="dollarSign">$ </span>
        <span className="itemPriceValue">{price}</span>
      </p>
    </div>
  );
}

export default CartItem;
