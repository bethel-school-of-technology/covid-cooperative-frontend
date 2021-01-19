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
                        <h1 className="CC">Covid Co-Op</h1>
                        <br />
                        <br />
                        <h2 className="h2Login"> Login Page </h2>
                        <p> Please Login or Register to access this page.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form ">
                        <h2>Login</h2>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" value={this.state.email} 
                                    onChange={this.handleChange}placeholder="Enter email" 
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} 
                                    onChange={this.handleChange} placeholder="Enter password" 
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
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