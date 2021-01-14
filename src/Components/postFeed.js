import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";


export default function postFeed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async (e) => {
            try {
                let data = await fetch("http://localhost:3000/quotes", { credentials: 'include' })
                let postsData = await data.json();

                console.log(postsData)

                setPosts(postsData.posts)
            } catch (err) {
                console.log(err)
            }
        }

        getPosts()
    }, [])

    if (posts.length === 0) {
        return <h2>Loading</h2>
    }

    return (
        <>
            <div className="w-2/3 mx-auto">
                <h1 className="text-2xl font-bold mx-2">My Posts</h1>

                <div className=" ">
                    <div className="flex flex-wrap w-full">
                        {posts.map((post, idx) => {
                            return (
                                <div className="w-1/3" key={idx}>
                                    <Link to={`/edit/${post.id}`} className="block p-2 m-2 rounded bg-white">
                                        <div className="text-xl">{post.title}</div>
                                        <div className="text-xs">{post.post}</div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );

}





// class postFeed extends React.Component {
//     state = {
//         posts: [ ]
//     }

//     //FETCH TO GET POSTS FROM BACKEND

//     componentDidMount() {
//         // Simple POST request with a JSON body using fetch
//         const requestOptions = {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' },
//            // body: JSON.stringify({ title: this.state.title, post: this.state.post  })
//                 // username: this.state.username
//         };
//         fetch('https://localhost:3001/allPosts', requestOptions)
//             .then(response => response.json())
//             .then(data => this.setState({ postId: data.id }));
//     };

//     render() {

//         const allPosts = this.state.posts.map(post => {
//             return (
//                 <div className="postHolder" key={post._id}>
//                 <div className="postContent">
//                     <div className="postTitle">{post.title}</div>
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

