import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "John",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/durpintm");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  // Called when the state is updated with new data
  // componentDidUpdate() {
  //   console.log("component did mount");
  // }

  // Called when another component is rendered
  // Used for clean up
  // componentWillUnmount() {
  //   console.log("Component Will Unmount");
  // }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: durpintm</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;

/*
** Mounting life cycle
Constructor is called (dummy data)
Render the component (Render happens with dummy data)
  <html with dummy data/>
component Did Mount
  <API Call>
  <this.setState> => updated with new data

*****Update
render(api data)
<html is loaded with new api data>
component Did Update
 */
