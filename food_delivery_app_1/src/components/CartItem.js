/* eslint-disable comma-dangle */
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
// eslint-disable-next-line no-unused-vars
let cartItems = [];

function CartItem({ name, imgSrc, price, itemId }) {
  // eslint-disable-next-line no-unused-vars
  const [qty, setQty] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [{ cart }, dispatch] = useStateValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty === 1) {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        dispatch({
          type: "SET_CART",
          cart: updatedCart,
        });
      }

      setQty(qty - 1);
    }
  };
  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>

        <div className="itemQuantity">
          <span>X {qty}</span>

          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQuantity("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>

      <p className="itemPrice">
        <span className="dollarSign">$ </span>
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;
