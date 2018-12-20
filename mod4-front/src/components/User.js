import React from "react";

export class User extends React.Component {
  state = {
    user: null,
    showEditForm: false
  };

  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
      });
  }

  render() {
    let { user, showUserEditForm } = this.state;
    return <User user={this.user} />;
  }
  user = user => {
    this.setState({ user });
  };

  editUser = () => {
    this.setState({ showEditForm: true });
  };

  destroySelectedUser = () => {
    let { user } = this.state;
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "DELETE"
    });
    this.setState(state => {
      state.users = state.users.filter(user => user.id != this.state.user.id);
      return state;
    });
  };

  updateUser = values => {
    let { user } = this.state;
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(values)
    });
    this.setState(state => {
      let user = state.users.find(user => user.id == this.state.user.id);
      user.first_name = values.first_name;
      user.last_name = values.Last_name;
      user.email = values.email;

      return state;
    });
  };
}
