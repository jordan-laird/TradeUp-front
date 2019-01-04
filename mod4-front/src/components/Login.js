import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export class Login extends React.Component {
  login = e => {
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: e.target.emailInput.value,
        password: e.target.passwordInput.value
      })
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("userID", result.user.id);
        this.goTo("/companies");
        ;
      });
  };
  goTo = url => {
    this.props.history.push(url);
  };

  render() {
    console.log('login', this.props.history)
    return (
      <div>
        <br />
        <br />
        <br />
        <br />

        <Segment inverted>
          <Form onSubmit={e => this.login(e)} inverted>
            <h1>Login</h1>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Email"
                name="emailInput"
                placeholder="Email"
              />
              <Form.Input
                fluid
                label="Password"
                type="password"
                name="passwordInput"
              />
            </Form.Group>
            <Button type="submit">Login</Button>
            <Button onClick={() => this.goTo(`/SignUp`)} type="button">
              SignUp
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
