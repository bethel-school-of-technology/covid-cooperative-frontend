import React from 'react';

class postFeed extends React.Component {
    state = {
        posts: []
    }

    //FETCH TO GET POSTS FROM BACKEND


    render() {
        const allPosts = this.state.posts.map(post => {
            return (
                <div className="postHolder" key={post._id}>
                <div className="postContent">
                    <div className="postTitle">{post.title}</div>
                    <p>{post.post}</p>
                </div>
            </div>
            )
        });

        return (
            <div className="container">
                <h4 className="center">POST FEED</h4>
                {allPosts}
            </div>
        )
    }

}

export default postFeed; 