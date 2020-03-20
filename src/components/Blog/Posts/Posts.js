import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import DisplayedPost from './DisplayedPost/DisplayedPost';
import PostList from './PostList/PostList';
import {setPageLoaded, setLoadedPosts} from "../../../actions";

import {WEBSITE_TEXT} from '../../../data/constants';

const Posts = props => {

    //Sets page as loaded after an interval
    const handleLoaded = () => {
        setTimeout(() => {
            props.setPageLoaded(true)
        }, 500);
    };

    //updates number of posts
    const updatePosts = (numberOfPosts) => {
        props.setLoadedPosts(numberOfPosts);
    };

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


    //sets error message if fetching posts fails
    const setErrorMessage = () => {
        setPosts([
            {
                title: {
                    rendered: WEBSITE_TEXT.fetchErrorMessage.title
                },
                content: {
                    rendered: WEBSITE_TEXT.fetchErrorMessage.content
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
            shortenedUrl = '/materialy' + shortenedUrl;
            return shortenedUrl;
        } else {
            return '/materialy/'
        }
    };

    useEffect(() => {

        //loads blog posts
        async function loadPosts() {
            fetch(WP_API_URL).then(response => {
                return response.json();
            }).then(posts => {
                // Updates state with fetched posts
                setPosts(posts);
                updatePosts(posts.length);
                handleLoaded(true);
                console.log(posts);
            }).catch(err => {
                //display error message in case of error
                setErrorMessage();
                updatePosts(1);
                handleLoaded(true);
            });
        }

        loadPosts();
    }, []);

    useEffect(() => {
        if (posts.length > 0) {
            handleLoaded();
        }
    });

    return (
        <React.Fragment>
            <DisplayedPost
                post={posts[0]}
            />
            {(props.loadedPosts > 1) &&
            <PostList
                posts={posts}
                shortenUrl={shortenUrl}
            />}
        </React.Fragment>
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
        setPageLoaded,
        setLoadedPosts
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);