import React, { useState, useEffect } from "react";


export default function PostFeed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(posts)
        const getAllPosts = async (e) => {
            try {
                let data = await fetch("http://localhost:3001/posts/allPosts", { credentials: 'include' })
                let postsData = await data.json();

                console.log(postsData.data)

                setPosts(postsData.data.allPosts)
                console.log(posts)
            } catch (err) {
                console.log(err)
            }
        }

        getAllPosts()

    }, [])

    // if (posts.length === 0) {
    //     return <h2>Loading</h2>
    // }

    return (

        <div className="">
            <div className="sidenav">
                <div className="login-main-text ">
                    <h1 className="CC">Covid Cooperative</h1>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12"></div>
                <h1 className="header">Posts</h1>
                <div className="container">
                    {posts.map((post, index) => {
                        return (
                            <div className="card">
                                <div className="postHolder" key={index}>
                                    <div className="card-body">
                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="card-title">{post.post}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


        </div>

    );

}





// class postFeed extends React.Component {
//     state = {
//         posts: [ ]
//     }

//    PLACE FETCH IN HERE



//     render() {

//         const allPosts = this.state.posts.map(post => {
//             return (
//                 <div className="postHolder" key={post._id}>
//                 <div className="postContent">
//                     <h2 className="postTitle">{post.title}</h2>
//                     <p>{post.post}</p>
//                 </div>
//             </div>
//             )
//         });

//         return (
//             <div className="container">
//                 <h4 className="center">POST FEED</h4>
//                 {allPosts}
//             </div>
//         )
//     }


// }

