import React, { Component } from 'react';
import Link from 'react-router-dom';

//import ReactDOM from 'react-dom';
import '../Components/unAuth.css'


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
    // firsthandler = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // lasthandler = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // emailhandler = (event) => {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // cityhandler = (event) => {
    //     this.setState({
    //         city: event.target.value
    //     })
    // }
    // statehandler = (event) => {
    //     this.setState({
    //         state: event.target.value
    //     })
    // }
    // passwordhandler = (event) => {
    //     console.log(event)
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

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
        //dev
    }

    render() {
        return (
            <div>
                <div className="sidenav">
                    <div className="form-main-text ">
                        <h1 className="CC">Covid Cooperative</h1>
                        <br />
                        <br />
                        <h2 className="h2Login"> Register Page </h2>
                        <p> Please Register and Login to access this page.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="register-form">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div onSubmit={this.handleSubmit}>
                                    <h2>User Registration</h2>
                                    <div className="form-group">
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
                                    <a href="http://localhost:3000/login"><input className="btn btn-secondary registerButton" type="submit" value="Login" /></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Signup;


/*
//Below is the form to post.

class UserInfoForm extends
    React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            category: "",
            title: "",
            post: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }
    handleSubmit = (event) => {
        alert("Username:" + this.state.username +
            "Category:" + this.state.category +
            "Title:" + this.state.title +
            "Post:" + this.state.post);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <label>
                    Name: <input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Category: <select
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value="">select ...</option>
                        <option value="mentalHealth">Mental Health</option>
                        <option value="jobs">Jobs</option>
                        <option value="goodNews">Good News</option>
                    </select>
                </label>
                <br />
                <label>
                    Name: <input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Name: <input
                        name="post"
                        value={this.state.post}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<UserInfoForm />,
    document.getElementById("root"));


// export default Form;

*/