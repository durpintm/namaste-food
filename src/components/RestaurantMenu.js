import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restroInfo, setRestroInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const url = MENU_API_URL + resId;
    const response = await fetch(MENU_API_URL + resId); // 229, 425

    const json = await response.json();
    setRestroInfo(json?.data);
  };

  if (restroInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restroInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {Array.isArray(cuisines) ? cuisines.join(",") : cuisines} -{" "}
        {costForTwoMessage}
      </h3>
      <ul>
        {itemCards?.map((item, index) => {
          return (
            <li key={index}>
              {item.card.info.name} - Rs.{" "}
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
