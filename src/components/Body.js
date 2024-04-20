import { useEffect, useState, useContext } from "react";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();

    // Optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline, please check your internet connection!!
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Conditional Rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black shadow-sm rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 shadow-md rounded-lg"
            onClick={() => {
              // Filter the restaurant card and update the UI
              const filteredRestaurants = listOfRestaurants.filter((restro) =>
                restro.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 shadow-md rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label className="m-2">UserName: </label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="m-2 flex flex-wrap justify-start">
        {filteredRestaurants?.map((restro) => {
          return (
            <div className="m-4" key={restro.info.id}>
              <Link to={"/restaurants/" + restro.info.id}>
                {restro.info.avgRating > 4.2 ? (
                  <RestaurantCardPromoted restroData={restro} />
                ) : (
                  <RestaurantCard restroData={restro} />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
