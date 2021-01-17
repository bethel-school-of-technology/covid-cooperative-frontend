import React from 'react';
import '../Components/Auth.css'

//Below is the form to post.


class UserInfoForm extends
    React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            post: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: this.state.title, post: this.state.post  })
        };
        
        fetch('http://localhost:3001/posts', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    console.log("Successful")
                } else {
                    console.log("UnSuccessful")
                }
                this.setState({ postId: data.id })
            });
    }
    
    render() {
        return (
            <div>
                <div className="sidenav">
                    <div className="post-main-text ">
                        <h1 className="CC">Covid Cooperative</h1>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="post-form"></div>
                        <form onSubmit={this.handleSubmit}>
                            <h2>Create Post</h2>
                            {}
                            <div className="form-group">
                                <label >
                                    Title: <input
                                        className="form-control"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label >
                                    Post: <input
                                        className="form-control"
                                        name="post"
                                        value={this.state.post}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfoForm;

    
