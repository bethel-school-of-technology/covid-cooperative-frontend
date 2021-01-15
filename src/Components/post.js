import React from 'react';
import ReactDOM from 'react-dom';
import '../Components/Auth.css'

//Below is the form to post.


class UserInfoForm extends
    React.Component {
    constructor() {
        super();
        this.state = {
            //username: "",
           // category: "",
            title: "",
            post: ""
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: this.state.title, post: this.state.post  })
                // username: this.state.username
        };
        fetch('https://localhost:3001/post', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }
    handleSubmit = (event) => {
        alert(
            // "Username:" + this.state.username +
           // "Category:" + this.state.category +
            "Title:" + this.state.title +
            "Post:" + this.state.post);
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text ">
                        <h1 className="CC">Covid Cooperative</h1>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="createPost-form"></div>
                        <form onSubmit={this.handleSubmit}>
                            <h2>Create Post</h2>
                            <div className="form-group">
                                <label>
                                    Name: <input
                                        className="form-control"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
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



//ReactDOM.render(<UserInfoForm />,
   // document.getElementById("root"));

export default UserInfoForm;

    


    // <label>
    //                 Category: <select
    //                     name="category"
    //                     value={this.state.category}
    //                     onChange={this.handleChange}
    //                 >
    //                     <option value="">select ...</option>
    //                     <option value="mentalHealth">Mental Health</option>
    //                     <option value="jobs">Jobs</option>
    //                     <option value="goodNews">Good News</option>
    //                 </select>
    //             </label>
    //             <br />
