import { CON_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
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
        src={CON_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} for Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
