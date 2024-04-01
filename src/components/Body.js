import restroList from "../utils/restroApiData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {restroList.map((restro) => {
          return <RestaurantCard key={restro.data.id} restroData={restro} />;
        })}
      </div>
    </div>
  );
};

export default Body;
