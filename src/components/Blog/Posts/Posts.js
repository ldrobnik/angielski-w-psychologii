import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import DisplayedPost from './DisplayedPost/DisplayedPost';
import PostList from './PostList/PostList';
import {setPageLoaded, setLoadedPosts} from "../../../actions";

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
        return props.match.params.year + "/" + props.match.params.month + "/" + props.match.params.id;
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
    const WP_API_URL = process.env.REACT_APP_WP_API_URL;


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

    useEffect(() => {
        setUrl(getUrl()); //update currently displayed URl whenever it changes
    }, [props.match.params.id]);

    useEffect(() => {
        setCurrPost(checkWhichPost(getUrl())); //update the currently displayed post
    });

    return (
        <React.Fragment>
            <DisplayedPost
                {...props}
                post={posts[currPost]}
                url={url}
            />
            {(props.loadedPosts > 1) &&
            <PostList
                {...props}
                posts={posts}
                url={url}
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