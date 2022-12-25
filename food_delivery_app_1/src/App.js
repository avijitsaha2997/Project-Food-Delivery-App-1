import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./components/BannerName";
import CartItem from "./components/CartItem";
import { Items, MenuItems } from "./components/Data";
import DebitCard from "./components/DebitCard";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import MenuCard from "./components/MenuCard";
import MenuContainer from "./components/MenuContainer";
import { useStateValue } from "./components/StateProvider";
import SubMenuContainer from "./components/SubMenuContainer";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );
  // eslint-disable-next-line no-unused-vars
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((element) => element.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((element) => element.addEventListener("click", setMenuActive));

    const menuCards = document.querySelector(".rowContainer").querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((element) => element.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach(element => element.addEventListener("click", setMenuCardActive));
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
              src="https://i.pinimg.com/originals/07/e1/24/07e124fc1110cfc2d307792798549ca6.png" alt="" />
          </div>

          {/* FoodContainer */}
          <div className="foodContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">

              {
                MenuItems && MenuItems.map(data => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>

                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1}
                    />
                  </div>
                ))
              }

            </div>
            <div className="foodItemContainer">

              {
                isMainData && isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price} />
                ))
              }

            </div>
          </div>

        </div>

        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart
            ? <div></div>

            : <div className="cartCheckOutContainer">
              <SubMenuContainer name={"Carts Items"} />
              <div className="cartContainer">

                <div className="cartItems">
                  {cart && cart.map((data) => (
                    <CartItem
                      key={data.id}
                      itemId={data.id}
                      name={data.name}
                      imgSrc={data.imgSrc}
                      price={data.price}
                    />
                  ))
                  }

                </div>
              </div>

              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span>45.0
                </p>
              </div>

              <button className="checkOut">Checkout</button>
            </div>}

        </div>
      </main>

      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>

    </div>
  );
}

export default App;
