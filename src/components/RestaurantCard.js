import { CON_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { restroData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restroData?.info;

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
    </div>
  );
};

export default RestaurantCard;
