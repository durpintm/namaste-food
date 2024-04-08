import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [number] = useState(1);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Number: {number}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Toronto</h3>
      <h4>Contact: durpintm</h4>
    </div>
  );
};

export default User;
