import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Menu, Image } from "semantic-ui-react";

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
              Stock City
            </Menu.Item>
            {/* <Menu.Item as="a">Home </Menu.Item> */}
            <Menu.Item as="a" onClick={() => this.goTo(`/companies`)}>
              Home
            </Menu.Item>
            <Menu.Item as="a" onClick={() => this.goTo(`/portfolio`)}>
              Portfolio{" "}
            </Menu.Item>
            <Menu.Item as="a" onClick={() => this.goTo(`/login`)}>
              Login
            </Menu.Item>{" "}
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
}

export const NavBar = withRouter(_NavBar);
