import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.webp";
import restroList from "./swiggyapi";

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
        {/* <RestaurantCard restroData={restroList[0]} />
        <RestaurantCard restroData={restroList[1]} />
        <RestaurantCard restroData={restroList[2]} />
        <RestaurantCard restroData={restroList[3]} />
        <RestaurantCard restroData={restroList[4]} />
        <RestaurantCard restroData={restroList[5]} />
        <RestaurantCard restroData={restroList[6]} />
        <RestaurantCard restroData={restroList[7]} />
        <RestaurantCard restroData={restroList[8]} /> */}
        {restroList.map((restro) => {
          return <RestaurantCard key={restro.data.id} restroData={restro} />;
        })}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { restroData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = restroData?.data;
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="restro-logo"
        alt="Burger"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600/" +
          cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} for Two</h4>
      <h4>{deliveryTime} minutes</h4>
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
