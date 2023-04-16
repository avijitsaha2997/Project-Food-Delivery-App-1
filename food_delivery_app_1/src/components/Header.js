import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import pic from "./profilepic.jpg";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ cart }, dispatch] = useStateValue();
  const toggleMenu = () => {
    document.querySelector(".rightMenu").classList.toggle("active");
  };
  // console.log("hi");

  return (
    <header>
      <img
        className="logo"
        src="https://www.thedogchef.co.uk/wp-content/uploads/2021/03/The-Dog-Chef-Logo.png"
        alt=""
      />

      <div className="inputBox">
        <SearchIcon className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartIcon className="cartIcon" />
        <div className="cartContent">
          <p>{cart?.length}</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img className="profilePic" src={pic} alt="" />
        </div>
        <h2 className="userName">Avijit</h2>
      </div>

      <div className="toggleMenu" onClick={toggleMenu}>
        <MenuIcon className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
