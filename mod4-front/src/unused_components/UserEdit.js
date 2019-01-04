import React from "react";

export class UserEdit extends React.Component {
  state = {
    user: null
  };

  saveUser = e => {
    e.preventDefault();
    let { firstNameInput, lastNameInput, emailInput } = e.target;
    let userID = this.props.match.params.id;
    fetch(`http://localhost:3000/api/v1/users/${userID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        email: emailInput.value
      })
    })
      .then(res => res.json())
      .then(() => {
        this.props.history.push(`/users/${userID}`);
      });
  };

  componentDidMount() {
    let userID = this.props.match.params.id;

    fetch(`http://localhost:3000/api/v1/users/${userID}`)
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }

  render() {
    if (this.state.user == null) return <h2>Loading...</h2>;
    const { first_name, last_name, email } = this.state.user;
    return (
      <form onSubmit={this.saveUser}>
        <h1>User Edit</h1>
        <div className="form-group">
          <label>FirstName</label>
          <input
            defaultValue={first_name}
            name="FirstNameInput"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label>LastName</label>
          <input
            defaultValue={last_name}
            name="lastNameInput"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            defaultValue={email}
            name="emailInput"
            className="form-control"
            type="text"
          />
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    );
  }
}
