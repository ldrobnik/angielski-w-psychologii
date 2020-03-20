import React, {useEffect, useState} from 'react';
import {Container, Row} from 'react-bootstrap';

import TextBubble from '../../UI/TextBubble/TextBubble';
import {SECTION_NAMES} from "../../../data/constants";

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
        <React.Fragment>
            <Container className="lightBackground sectionContent">
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
            </Container>
            <Container className="lightBackground sectionContent">
                <Row>
                    <h1 id={SECTION_NAMES.blog[0].id}>
                        {SECTION_NAMES.blog[0].name}
                    </h1>
                </Row>
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
            </Container>
        </React.Fragment>
    );
};

export default Posts;