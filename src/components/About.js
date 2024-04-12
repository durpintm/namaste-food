import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>
          <UserContext.Consumer>
            {(data) => (
              <span className="text-xl text-bold">
                LoggedIn User: {data.loggedInUser}
              </span>
            )}
          </UserContext.Consumer>
        </h2>
        <h2>This is About Page of Namaste Food</h2>
        <UserClass name={"Durpin TM (class)"} location={"Toronto (class)"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About Page of Namaste Food</h2>
//       <UserClass name={"Durpin TM (class)"} location={"Toronto (class)"} />
//     </div>
//   );
// };

export default About;
