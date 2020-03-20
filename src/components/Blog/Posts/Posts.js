import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import DisplayedPost from './DisplayedPost/DisplayedPost';
import PostList from './PostList/PostList';
import {setPageLoaded, setLoadedPosts} from "../../../actions";

import {WEBSITE_TEXT} from '../../../data/constants';

const Posts = props => {

    //removes all instances of a string from another string
    const removeString = (str, find) => {
        return str ? str.replace(new RegExp(find, 'g'), '') : '';
    };

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

    return (
        <React.Fragment>
            <DisplayedPost
                post={posts[0]}
                removeString={removeString}
            />
            {(props.loadedPosts > 1) && <PostList
                posts={posts}
                removeString={removeString}
            />}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
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