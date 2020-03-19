import React, {useEffect, useState} from 'react';

import TextBubble from '../../UI/TextBubble/TextBubble';

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
        <div className="lightBackground sectionContent">
            {posts.map((post, index) => (
                <React.Fragment
                    key={index}
                >
                    <TextBubble
                        type="blog"
                    >
                        <h2
                            dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                        <div
                            className="blogPost"
                            dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                    </TextBubble>
                    {(index === 0) && <div id="lekcje"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};


export default Posts;