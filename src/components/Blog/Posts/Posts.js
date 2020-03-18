import React, {useEffect, useState} from 'react';

const Posts = () => {

    //Blog posts
    const [posts, setPosts] = useState([]);

    //Wordpress API URL
    const WP_API_URL = process.env.REACT_APP_WP_API_URL;

    useEffect(() => {

        //loads blog posts
        async function loadPosts() {
            fetch(WP_API_URL).then(response => {
                return response.json();
            }).then(posts => {
                // Set posts
                setPosts(posts);
                console.log(posts);
            }).catch(err => {
                // Error occurred
                console.log("Error Reading data " + err);
            });
        }

        loadPosts();
    }, []);

    return (
        <div>
            Posts
        </div>
    );
};


export default Posts;