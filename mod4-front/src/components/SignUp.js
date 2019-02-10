import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message, Segment, Grid, Header } from "semantic-ui-react";

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
          password: e.target.password.value
        }
      })
    }).then(() => {
      alert("Your account has been created!");
      this.props.history.push("/companies");
    });
  };
  render() {
    console.log('sign up', this.props.history)
    return (
      <div>
        <Grid textAlign='center' style={{ height: '100%', marginTop: 100 }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Create an Account
            </Header>
            <Form size='large' onSubmit={e => this.signUpClickHandler(e)}>
              <Segment stacked>
                <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' name="emailInput" />
                <Form.Input placeholder='First Name' name="firstNameInput" />
                <Form.Input placeholder='Last Name' name="lastNameInput" />
                <Form.Input
                  fluid icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="passwordInput"
                />

                <Button color="black" fluid size='large' type="submit">
                  Create Account
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <Link to="/login">Log In</Link>
            </Message>
          </Grid.Column>
        </Grid>
        {/* <br />
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
        </Segment> */}
      </div>
    );
  }
}
