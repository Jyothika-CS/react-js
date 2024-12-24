import { userInfo } from "os";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy",
        location: "default",
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");

    const data = await fetch("https://api.github.com/users/Jyothika-CS");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  render() {
    // console.log(this.props.name + "Child Render");

    const { login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h3>Location: {"Bangalore"}</h3>
        <h4>Contact: @Jyothika-CS</h4>
      </div>
    );
  }
}

export default UserClass;
