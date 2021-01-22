import React, { useState, useEffect } from "react";
import '../Components/Auth.css'


export default function PostFeed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(posts)
        const getAllPosts = async (e) => {
            try {
                let data = await fetch("http://localhost:3001/posts/allPosts", 
                { credentials: 'include', headers: {'Authorization': localStorage.getItem("Auth") }
            })
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

    return (
        <div className="">
            <div className="row">
                <div className="sidenav col-md-4 col-sm-12">
                    <div className="sideNav-main-text ">
                        <h1 className="CC">Covid Co-Op</h1>
                    </div>
                </div>
                <div className="container main col-md-8 col-sm-10">
                    <div className=" container col-md-8 col-sm-12">
                        <h1 className="header">Posts</h1>
                        <div className="container">
                            {posts.map((post) => {
                                return (
                                    <div className="card" key={post._id}>
                                        <div className="postHolder">
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
            </div>
        </div>
    );
}






