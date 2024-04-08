import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      number: 2,
    };
    console.log("child constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    const { name, location } = this.props;
    const { count, number } = this.state;
    console.log("child render");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            // Never update state variables directly
            this.setState({
              count: this.state.count + 1,
              number: this.state.number + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Number: {number}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: durpintm</h4>
      </div>
    );
  }
}

export default UserClass;
