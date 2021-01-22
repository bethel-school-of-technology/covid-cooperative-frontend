import React from 'react';
import '../Components/Auth.css'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


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
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("Auth")
            },
            body: JSON.stringify({ title: this.state.title, post: this.state.post })
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
                <div className="row">
                    <div className="sidenav col-md-4">
                        <div className="sideNav-main-text">
                            <h1 className="CC">Covid Co-Op</h1>
                        </div>
                    </div>
                    <div className="container main col-md-6 col-sm-10">
                        <div className="col-md-8 col-sm-12">
                            <div className="post-form"></div>
                            <div onSubmit={this.handleSubmit}>
                                <h2>Create Post</h2>
                                <Form>
                                    <Form.Group controlId="formBasicTitle">
                                        <Form.Label>Title: </Form.Label>
                                        <Form.Control type="title" name="title" value={this.state.title}
                                            onChange={this.handleChange} placeholder="Enter title"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Post:</Form.Label>
                                        <Form.Control as="textarea" name="post" type="text" value={this.state.post}
                                            onChange={this.handleChange} placeholder="Enter post"
                                        />
                                    </Form.Group>
                                   <a href="http://localhost:3000/postFeed"><Button variant="primary" type="submit">
                                        Post
                                </Button></a>
                                </Form>


                                {/* {}
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
                                        name="post" value={this.state.post} onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <input type="submit" value="Submit" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfoForm;


