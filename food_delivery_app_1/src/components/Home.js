/* eslint-disable no-unused-vars */
/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
import { HomeRounded } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useEffect, useState } from "react";
import BannerName from "./BannerName";
import CartItem from "./CartItem";
import { Items, MenuItems } from "./Data";
import DebitCard from "./DebitCard";
import Header from "./Header";
import "./Home.css";
import ItemCard from "./ItemCard";
import MenuCard from "./MenuCard";
import MenuContainer from "./MenuContainer";
import { useStateValue } from "./StateProvider";
import SubMenuContainer from "./SubMenuContainer";
import { calculateTotalPrice } from "./reducer";

function Home() {
  const [{ cart }, dispatch] = useStateValue();
  const total = calculateTotalPrice(cart);
  const totalPriceWIthDecimal = total.toFixed(2);
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((element) => element.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((element) =>
      element.addEventListener("click", setMenuActive)
    );

    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((element) => element.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((element) =>
      element.addEventListener("click", setMenuCardActive)
    );
  }, [isMainData, cart]);

  // set main dish items on filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      {/* Header Scetion */}
      <Header />

      {/* Main Container */}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name="Avijit" discount="20" link="#" />
            <img
              className="deliveryPic"
              src="https://i.pinimg.com/originals/07/e1/24/07e124fc1110cfc2d307792798549ca6.png"
              alt=""
            />
          </div>

          {/* FoodContainer */}
          <div className="foodContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1}
                    />
                  </div>
                ))}
            </div>
            <div className="foodItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    id={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                    quantity={data.quantity}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div></div>
          ) : (
            <div className="cartCheckOutContainer">
              <SubMenuContainer name={"Carts Items"} />
              <div className="cartContainer">
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={Math.random()}
                        itemId={data.id}
                        id={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                        quantity={data.quantity}
                      />
                    ))}
                </div>
              </div>

              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span>
                  {totalPriceWIthDecimal}
                </p>
              </div>

              <button className="checkOut">Checkout</button>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer
            link={"https://github.com/avijitsaha2997"}
            icon={<GitHubIcon />}
          />
          <MenuContainer
            link={"https://www.facebook.com/wwwhite.angelll/"}
            icon={<FacebookIcon />}
          />
          <MenuContainer link={"/home"} icon={<HomeRounded />} isHome />
          <MenuContainer
            link={"https://www.linkedin.com/in/avijitsaha2997/"}
            icon={<LinkedInIcon />}
          />
          <MenuContainer
            link={"https://avijit-saha2997.web.app/"}
            icon={<LanguageIcon />}
          />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default Home;
