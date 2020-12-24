import React from 'react';
class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='username' name='username' placeholder='username...' required onChange={this.handleChange} />'
                    <input type='password' name='password' placeholder='password...' required onChange={this.handleChange} />'
                    <button onSubmit>Login</button>
                </form>
            </div>
        )
    }
}
export default Login;
//make sure to import login on the app.js




