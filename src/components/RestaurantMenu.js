import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restroInfo = useRestaurantMenu(resId);

  if (restroInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restroInfo?.cards[2]?.card?.card?.info;
  console.log(restroInfo);

  let index = 4;
  if (restroInfo?.cards[index]?.groupedCard == undefined) {
    index = 5;
  }

  const { itemCards } =
    restroInfo?.cards[index]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines} -{" "}
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
