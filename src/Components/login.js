import userEvent from '@testing-library/user-event';
import React from 'react';


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

        let data = await fetch('http://localhost:3000/participants/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        })

        let participant = await data.json(); 

        if(!participant.hasOwnProperty('message')){
            console.log('Welcome Back')
        } 


    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='email' placeholder='email...' required onChange={this.handleChange} />'
                    <input type='password' name='password' placeholder='password...' required onChange={this.handleChange} />'
                    <button onSubmit>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
//make sure to import login on the app.js
