/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useStateValue } from "./StateProvider";

function ItemCard({ imgSrc, name, ratings, price, itemId, quantity, id }) {
  const [isFavourite, setFavourite] = useState(false);
  const [{ cart }, dispatch] = useStateValue();

  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        imgSrc,
        name,
        ratings,
        price,
        itemId,
        quantity,
        id,
      },
    });
  };

  return (
    <div className="itemCard" id="itemId">
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        <Favorite />
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${
                  currentValue > i ? "yellowgreen" : "gray"
                }`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>

          <i className="addToCart">
            <AddRounded onClick={addToBasket} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
