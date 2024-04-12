const RestaurantCategory = (props) => {
  const data = props.data;
  console.log(data.title);
  return (
    <div>
      {/* Header */}
      <div>
        <span>{data.title}</span>
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
