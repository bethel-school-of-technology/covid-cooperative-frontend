import React from 'react';
import '../Components/unAuth.css'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        let data = await fetch('http://localhost:3001/participants/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        })

        let participant = await data.json();

        if (!participant.hasOwnProperty('message')) {
            console.log('Welcome Back')
        }


    }
    render() {
        return (
            <div className="">
                <div className="sidenav">
                    <div className="login-main-text ">
                        <h1 className="CC">Covid Cooperative</h1>
                        <br />
                        <br />
                        <h2 className="h2Login"> Login Page </h2>
                        <p> Please Login or Register to access this page.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form ">
                            {/* <form onSubmit={this.handleSubmit} className="">
                                <h2 className="h2Login">Login</h2>
                                <div className="form-group"> 
                                    <label>Email: </label>
                                    <input className="form-control" type='text' name='email' placeholder=' Email...' required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input className="form-control" type='password' name='password' placeholder=' Password...' required onChange={this.handleChange} />
                                </div>
                                <input className="btn btn-black loginButton" type='submit' value='Submit' />
                                <a href="http://localhost:3000/form"><input className="btn btn-secondary registerButton" type='Register' value='Register' /></a>

                            </form> */}
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
  </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
//make sure to import login on the app.js
// <button onClick>Login</button>