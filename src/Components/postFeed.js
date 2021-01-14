import React from 'react';

import { useHistory, Link } from "react-router-dom";


class postFeed extends React.Component {
    state = {
        posts: [ ]
    }

    //FETCH TO GET POSTS FROM BACKEND

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
           // body: JSON.stringify({ title: this.state.title, post: this.state.post  })
                // username: this.state.username
        };
        fetch('https://localhost:3001/allPosts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    };

    render() {
        
        const { posts } = this.state;
        // ? () : () => This (?) means it is a true or false statement. What's in the first 
        // set of parenthesis if it's true, and do in the second parenthesis if it's false 
        const allPosts = posts.length ? (
            posts.map(post => {
                return (
                    <div className="postHolder" key={post._id}>
                        <div className="postContent">
                            <div className="postTitle">{post.title}</div>
                            <p>{post.post}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No Posts</div>
            )


        return (
            <div className="container">
                <h4 className="center">Post Feed</h4>
                {allPosts}
            </div>
        )
    }

}

export default postFeed; 