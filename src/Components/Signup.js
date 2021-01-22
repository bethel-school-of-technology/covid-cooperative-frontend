import React, { Component } from 'react';
import '../Components/unAuth.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Below is the form to signup. 

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            city: "",
            state: "",
            password: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Signed Up!`)
        console.log(this.state);
        this.setState({
            //routIng
            state: event.target.value
        })
    }


    // CREATE FETCH TO BACKEND 
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submitting form')

        let data = await fetch('http://localhost:3001/participants/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname: this.state.firstName, lastname: this.state.lastName, email: this.state.email, password: this.state.password, city: this.state.city, state: this.state.state })
        })

        let participant = await data.json({});

        console.log(participant)

        if (participant.status === 200) {
            window.alert(`${this.state.firstName} ${this.state.lastName}  Signed Up!`)
            console.log(this.state);
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                city: "",
                state: "",
            })
        }
        else {
            window.alert('error');
        }
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <div className="row">
                <div className="sidenav col-md-4">
                    <div className="sideNav-main-text">
                        <h1 className="CC">Covid Co-Op</h1>
                        <br />
                        <br />
                        <h2 className="h2Login"> Register Page </h2>
                        <p> Please Register and Login to access this page.</p>
                    </div>
                </div>
                <div className="container main col-md-6 col-sm-10">
                    <div className="col-md-8 col-sm-12">
                        <div className="register-form">
                            <div onSubmit={(e) => this.handleSubmit(e)}>
                                <div onSubmit={this.handleSubmit}>
                                    <h2>User Registration</h2>
                                    <Form>
                                        <Form.Group controlId="formGridFirstName">
                                            <Form.Label>First Name: </Form.Label>
                                            <Form.Control name="firstName" value={this.state.firstName}
                                                type="firstName" onChange={this.handleChange} placeholder="Enter first name"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formGridLastName">
                                            <Form.Label>Last Name: </Form.Label>
                                            <Form.Control name="lastName" value={this.state.lastName}
                                                type="lastName" onChange={this.handleChange} placeholder="Enter last name"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control name="city" value={this.state.city}
                                                type="city" onChange={this.handleChange} placeholder="Enter city"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control name="state" value={this.state.state}
                                                type="state" onChange={this.handleChange} placeholder="Enter state"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name="email" value={this.state.email}
                                                type="email" onChange={this.handleChange} placeholder="Enter email"
                                            />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name="password" value={this.state.password}
                                                type="password" onChange={this.handleChange} placeholder=" Enter password"
                                            />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Register
                                        </Button>
                                    </Form>
                                    
                                    {/* <div className="form-group">
                                        <label>First Name:</label>
                                        <input className="form-control" name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name..." /><br />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input className="form-control" name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name..." /><br />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input className="form-control" name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email..." /><br />
                                    </div>
                                    <div className="form-group">
                                        <label>City:</label>
                                        <input className="form-control" name="city" type="text" value={this.state.city} onChange={this.handleChange} placeholder="City..." /><br />
                                    </div>
                                    <div className="form-group"> 
                                        <label>State:</label>
                                        <input className="form-control" name="state" type="text" value={this.state.state} onChange={this.handleChange} placeholder="State..." /><br />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input className="form-control" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password..." /><br />
                                    </div>
                                    <input className="btn btn-black loginButton" type="submit" value="Submit" />
                                    <a href="http://localhost:3000/login"><input className="btn btn-secondary registerButton" type="submit" value="Login" /></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

export default Signup;


