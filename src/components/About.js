import User from "./User";
import UserClass from "./UserCard";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props); 

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent componentDidMount");
    }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Bangalore"} />
      </div>
    );
  }
}

/** 
 * <Parent>
 *  <Child1 />
 *  <Child2 />
 *  <Child3 />
 * <Parent />
 * 
 * Parent Constructor
 * Parent Render
 * 
 * FirstChild Constructor
 * FirstChild Render
 * 
 * SecondChild Constructor
 * SecondChild Render
 * 
 * ThirdChild Constructor
 * ThirdChild Render
 * 
 * FirstChild componentDidMount
 * SecondChild componentDidMount
 * ThirdChild componentDidMount
 * Parent componentDidMount
 */

export default About;
