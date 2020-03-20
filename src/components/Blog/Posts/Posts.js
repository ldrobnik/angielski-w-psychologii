import React, {useEffect, useState} from 'react';
import {Row} from 'react-bootstrap';

import TextBubble from '../../UI/TextBubble/TextBubble';

const Posts = () => {

    //Blog posts
    const [posts, setPosts] = useState([
        {
            title: {
                rendered: ''
            },
            content: {
                rendered: ''
            },
            excerpt: {
                rendered: ''
            }
        }
    ]);

    //Wordpress API URL
    const WP_API_URL = process.env.REACT_APP_WP_API_URL;

    useEffect(() => {

        //loads blog posts
        async function loadPosts() {
            fetch(WP_API_URL).then(response => {
                return response.json();
            }).then(posts => {
                // Updates state with fetched posts
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
            <Row>
                {posts &&
                <TextBubble
                    type="blog"
                >
                    <h2
                        dangerouslySetInnerHTML={{__html: posts[0].title.rendered}}/>
                    <div
                        className="blogPost"
                        dangerouslySetInnerHTML={{__html: posts[0].content.rendered}}/>
                </TextBubble>
                }
            </Row>
            <div id="lekcje"></div>
            <Row className="separator"></Row>
            <Row>
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
                                dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                        </TextBubble>
                    </React.Fragment>
                ))}
            </Row>
            <Row className="separator"></Row>
        </div>
    );
};

export default Posts;