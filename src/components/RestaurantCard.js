import { CON_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { restroData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restroData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="p-4 w-[280px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="Restaurant"
        src={CON_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla?.slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher order component
// Input => RestaurantCard // Output => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
