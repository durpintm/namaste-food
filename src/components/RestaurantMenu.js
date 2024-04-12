import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restroInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (restroInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restroInfo?.cards[2]?.card?.card?.info;

  let index = 4;
  if (restroInfo?.cards[index]?.groupedCard == undefined) {
    index = 5;
  }

  const { itemCards } =
    restroInfo?.cards[index]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories = restroInfo?.cards[
    index
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines} -{" "}
        {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          // Controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
      {/* <ul>
        {itemCards?.map((item, index) => {
          return (
            <li key={index}>
              {item.card.info.name} - Rs.{" "}
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
