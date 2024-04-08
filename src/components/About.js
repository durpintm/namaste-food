import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
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
