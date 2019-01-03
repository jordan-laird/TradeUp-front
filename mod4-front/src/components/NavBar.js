import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Menu, Icon } from "semantic-ui-react";

class _NavBar extends React.Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item header>
              {/* <Image
                size="mini"
                src="/logo.png"
                style={{ marginRight: "1.5em" }}
              /> */}
              <Icon name="chart line " size="big" /> Stock City
            </Menu.Item>
            {/* <Menu.Item as="a">Home </Menu.Item> */}
            <Menu.Item as="a" onClick={() => this.goTo(`/companies`)}>
              Home
            </Menu.Item>
            <Menu.Item as="a" onClick={() => this.goTo(`/portfolio`)}>
              Portfolio{" "}
            </Menu.Item>
            {!this.props.currentUser && (
              <Menu.Item as="a" onClick={() => this.goTo(`/login`)}>
                Login
              </Menu.Item>
            )}
            {this.props.currentUser && (
              <Menu.Item as="a" onClick={() => this.logoutUser()}>
                Logout
              </Menu.Item>
            )}{" "}
            <Menu.Item as="a" onClick={() => this.goTo(`/SignUp`)}>
              SignUp
            </Menu.Item>{" "}
          </Container>
        </Menu>
      </div>
    );
  }

  goTo = url => {
    this.props.history.push(url);
  };

  logoutUser = () => {
    console.log("bye");
    localStorage.clear();
    this.goTo("/login");
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    // this.props.setCurrentUser(null);
  };
}

export const NavBar = withRouter(_NavBar);
