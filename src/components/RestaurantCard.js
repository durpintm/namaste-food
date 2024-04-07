import { CON_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { restroData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restroData?.info;

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
      <h4>{costForTwo} </h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
