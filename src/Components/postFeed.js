import React from 'react';

class postFeed extends React.Component {
    state = {
        posts: []
    }

    //FETCH TO GET POSTS FROM BACKEND
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
                <h4 className="center">POST FEED</h4>
                {allPosts}
            </div>
        )
    }

}

export default postFeed; 