import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log("contextData", loggedInUser)

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg my-4 sm:bg-gray-50">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-semibold">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 font-semibold">
            <Link to="/">🏠Home</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/about">ℹ️About Us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">📞Contact Us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/cart">🛒Cart({cartItems.length})</Link>
          </li>
          <button
            className="px-4 py-1 ml-1 bg-orange-500 rounded-lg text-white font-semibold"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">👤{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
