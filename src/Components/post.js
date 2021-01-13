import React from 'react';
import ReactDOM from 'react-dom';

//Below is the form to post.


class UserInfoForm extends
    React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
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
            body: JSON.stringify({ username: this.state.username, title: this.state.title, post: this.state.post  })
        };
        fetch('https://localhost:3001/post', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }
    handleSubmit = (event) => {
        alert("Username:" + this.state.username +
           // "Category:" + this.state.category +
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
                    Title: <input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>


                   Post: <input

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
