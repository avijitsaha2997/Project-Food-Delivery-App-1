import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Items } from "./Data";
import { useStateValue } from "./StateProvider";

const cartData = [];
function ItemCard({ imgSrc, name, ratings, price, itemId }) {
    const [isFavourite, setFavourite] = useState(false);

    const [isCart, setCart] = useState(null);
    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();
    useEffect(() => {
        if (isCart) {
            cartData.push(isCart);
            dispatch({
                type: "SET_CART",
                cart: cartData
            });
        }
    }, [isCart]);

    const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    return (
        <div className="itemCard" id="itemId">

            <div className={`isFavourite ${isFavourite ? "active" : ""}`}
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
                            <i key={i} className={`rating ${currentValue > i ? "yellowgreen" : "gray"}`}
                                onClick={() => handleClick(i + 1)}
                            >
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className="price"><span>$ </span>{price}</h3>
                    </div>

                    <i className="addToCart" onClick={() => setCart(Items.find(n => n.id === itemId))}>
                        <AddRounded />
                    </i>
                </div>
            </div>

        </div>
    );
}

export default ItemCard;
