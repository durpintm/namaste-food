import { useState } from "react";

import restroList from "../utils/restroApiData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restroList);

  // Normal JS variable
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listOfRestaurants.map((restro) => {
          return <RestaurantCard key={restro.data.id} restroData={restro} />;
        })}
      </div>
    </div>
  );
};

export default Body;
