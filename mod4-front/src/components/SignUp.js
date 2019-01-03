import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message, Segment } from "semantic-ui-react";

export class SignUp extends Component {
  signUpClickHandler = e => {
    e.persist();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: e.target.firstNameInput.value,
          last_name: e.target.lastNameInput.value,
          email: e.target.emailInput.value,
          password: e.target.passwordInput.value
        }
      })
    }).then(() => {
      alert("Your account has been created!");
      this.props.history.push("/companies");
    });
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Segment onSubmit={e => this.signUpClickHandler(e)} inverted>
          <Form inverted>
            <h1>Sign Up</h1>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                name="firstNameInput"
                placeholder="First name"
              />
              <Form.Input
                fluid
                label="Last name"
                name="lastNameInput"
                placeholder="Last name"
              />
              <Form.Input
                fluid
                label="Email"
                name="emailInput"
                placeholder="email"
              />
              <Form.Input
                fluid
                label="Password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Button type="submit">Submit</Button>
            <Message>
              Already have an account? <Link to="/login">Log In</Link>
            </Message>
          </Form>
        </Segment>
      </div>
    );
  }
}
