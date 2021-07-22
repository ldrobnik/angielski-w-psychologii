import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container, Row} from 'react-bootstrap';

import './Posts.css';

import DisplayedPost from './DisplayedPost/DisplayedPost';
import PostList from './PostList/PostList';
import {setLoadedPosts} from '../../../actions';

import {WEBSITE_TEXT} from '../../../data/constants';

const Posts = props => {

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

    //creates a complete url from different parameters
    const getUrl = () => {
        return props.match.params.year + '/' + props.match.params.month + '/' + props.match.params.id;
    };

    //currently displayed url
    const [url, setUrl] = useState(getUrl());

    //checks which post should be displayed based on the current url
    const checkWhichPost = (url) => {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].link) {
                if (posts[i].link.includes(url)) {
                    return i;
                }
            }

        }
        return 0;
    };

    //currently displayed post
    const [currPost, setCurrPost] = useState(checkWhichPost(getUrl()));


    //Wordpress API URL
    const WP_API_URL = process.env.REACT_APP_WP_API_URL + '/wp-json/wp/v2/posts?per_page=100';

    //updates number of posts
    const updatePosts = (numberOfPosts) => {
        props.setLoadedPosts(numberOfPosts);
    };

    //sets error message if fetching posts fails
    const setErrorMessage = () => {
        setPosts([
            {
                title: {
                    rendered: WEBSITE_TEXT.blog.errorMessage.title
                },
                content: {
                    rendered: WEBSITE_TEXT.blog.errorMessage.content
                },
                excerpt: {
                    rendered: ''
                }
            }
        ]);
    };

    //removes the url of the Wordpress site from an url
    const shortenUrl = (url) => {
        if (url) {
            let shortenedUrl = url.split('.com')[1]; //split at the end of the Wordpress adress and extract the rest
            shortenedUrl = '/lekcje' + shortenedUrl;
            return shortenedUrl;
        } else {
            return '/lekcje/'
        }
    };

    //loads blog posts
    const loadPosts = () => {
        fetch(WP_API_URL).then(response => {
            return response.json();
        }).then(posts => {
            setPosts(posts); // Update state with fetched posts
            updatePosts(posts.length); //update state with the number of fetched posts
        }).catch(err => {
            setErrorMessage(); //display error message in case of error
            updatePosts(1); //so that only error message is displayed
        });
    };

    useEffect(() => {
        loadPosts();
    }, [WP_API_URL]);


    useEffect(() => {
        setUrl(getUrl()); //update currently displayed URl whenever it changes
    }, [props.match.params]);

    useEffect(() => {
        setCurrPost(checkWhichPost(getUrl())); //update the currently displayed post
    }, [props.match.params]);

    return (
        <div id="postWrapper" className="verticallyCentered">
            <DisplayedPost
                {...props}
                post={posts[currPost]}
                url={url}
            />

            {(props.loadedPosts > 1) &&
            <React.Fragment>
                <Container>
                    <PostList
                        {...props}
                        posts={posts}
                        currPost={currPost}
                        url={url}
                        shortenUrl={shortenUrl}
                        id="postList"
                    />
                </Container>
            </React.Fragment>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded,
        loadedPosts: state.loadedPosts
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setLoadedPosts
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);