import React from "react";
import { Button, Form, Segment, Grid, Header, Message } from "semantic-ui-react";
import { Link } from 'react-router-dom'


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
        <Grid textAlign='center' style={{ height: '100%', marginTop: 100 }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header  as='h2' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={e => this.login(e)}>
              <Segment stacked>
                <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' name="emailInput" />
                <Form.Input
                  fluid icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="passwordInput"
                />

                <Button color="black" fluid size='large' type="submit">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to={'/signup'}>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div >
      // <div>
      //   <br />
      //   <br />
      //   <br />
      //   <br />

      //   <Segment inverted>
      //     <Form onSubmit={e => this.login(e)} inverted>
      //       <h1>Login</h1>
      //       <Form.Group widths="equal">
      //         <Form.Input
      //           fluid
      //           label="Email"
      //           name="emailInput"
      //           placeholder="Email"
      //         />
      //         <Form.Input
      //           fluid
      //           label="Password"
      //           type="password"
      //           name="passwordInput"
      //         />
      //       </Form.Group>
      //       <Button type="submit">Login</Button>
      //       <Button onClick={() => this.goTo(`/SignUp`)} type="button">
      //         SignUp
      //       </Button>
      //     </Form>
      //   </Segment>
      // </div>
    );
  }
}
