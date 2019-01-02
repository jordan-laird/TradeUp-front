import React from "react";

export class Logout extends React.Component {
  logoutUser = () => {
    localStorage.clear();
    console.log("click");
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    // this.props.setCurrentUser(null);
  };

  render() {
    return (
      <div>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}
