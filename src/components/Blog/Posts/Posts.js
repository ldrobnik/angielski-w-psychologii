import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Container, Row} from 'react-bootstrap';

import TextBubble from '../../UI/TextBubble/TextBubble';
import DisplayedPost from './DisplayedPost/DisplayedPost';
import PostList from './PostList/PostList';
import {SECTION_NAMES} from "../../../data/constants";
import {setPageLoaded, setLoadedPosts} from "../../../actions";

const Posts = props => {

    //Sets page as loaded after an interval
    const handleLoaded = () => {
        setTimeout(() => {props.setPageLoaded(true)}, 500);
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
                // Error occurred
                console.log("Error Reading data " + err);
                handleLoaded(true);
            });
        }

        loadPosts();
    }, []);

    return (
        <React.Fragment>
            <DisplayedPost
                post={posts[0]}
            />
            {(props.loadedPosts > 1) && <PostList
                posts={posts}
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