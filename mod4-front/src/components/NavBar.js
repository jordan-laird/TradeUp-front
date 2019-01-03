import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

class _NavBar extends React.Component {
  // userAuthenticated = () => {
  //   if (
  //     !this.props.currentUser ||
  //     this.props.currentUser.error === "Please log in"
  //   ) {
  //     return (
  //       <Menu>
  //         <Container>
  //           <Menu.Item as="a" onClick={() => this.goTo(`/login`)}>
  //             {" "}
  //             Login{" "}
  //           </Menu.Item>{" "}
  //           <Menu.Item as="a" onClick={() => this.goTo(`/SignUp`)}>
  //             {" "}
  //             SignUp{" "}
  //           </Menu.Item>{" "}
  //         </Container>
  //       </Menu>
  //     );
  //   } else {
  //     return (
  //       <Menu>
  //         <Container>
  //           <Menu.Item as="a" onClick={() => this.goTo(`/logout`)}>
  //             {" "}
  //             Logout{" "}
  //           </Menu.Item>{" "}
  //           <Menu.Item name={this.props.currentUser.firstName}>
  //             {" "}
  //             SignUp{" "}
  //           </Menu.Item>{" "}
  //         </Container>
  //       </Menu>
  //     );
  //   }
  // };

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
            <Menu.Item as="a" onClick={() => this.logoutUser()}>
              Logout
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
