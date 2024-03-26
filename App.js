import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.webp";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        <RestaurantCard
          resName="The Burger Club"
          cusine="Burger, Pizza, Asian"
        />
        <RestaurantCard resName="KFC" cusine="Fried Chicken, Nuggets" />
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  //{ resName, cusine } in the parameters OR
  const { resName, cusine } = props; // Destructuring

  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="restro-logo"
        alt="Burger"
        src="https://b.zmtcdn.com/data/pictures/chains/3/17953943/816872e9f1fcc43304e21a0f050f5f21_o2_featured_v2.jpg?output-format=webp"
      />
      <h3>{resName}</h3>
      <h4>{cusine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
