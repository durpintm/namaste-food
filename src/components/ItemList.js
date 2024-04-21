import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);
  const handleAddItem = (item) => {
    const action = addItem(item);
    // Dispatch an action
    dispatch(action);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-0 right-0">
              <button
                className="p-2 rounded-lg bg-slate-200 shadow-lg"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add +
              </button>
            </div>
            <img src={CON_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
