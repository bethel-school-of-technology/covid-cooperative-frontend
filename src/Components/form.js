import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Below is the form to signup. 

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
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

        let data = await fetch('http://localhost:3000/participants/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname: this.state.firstName, lastname: this.state.lastName, email: this.state.email, password: this.state.password, city: this.state.city, state: this.state.state})
        })

        let participant = await data.json({});

        console.log(participant)

        if (participant.hasOwnProperty("error")) {
            console.log(participant.error)
        }

        if (participant.created) {
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
            firstName: "",
            lastName: "",
            username: "",
            password: "",
        })
        event.preventDefault()
      //dev
    }

    render() {
        return (
            <div>

                <form onSubmit={(e) => this.handleSubmit(e)}>

                <form onSubmit={this.handleSubmit}>

                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Username :</label> <input type="text" value={this.state.username} onChange={this.usernamehandler} placeholder="Username..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}

export default Form


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

// export default Form