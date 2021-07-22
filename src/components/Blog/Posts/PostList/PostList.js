import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import posed from 'react-pose';
import {Waypoint} from 'react-waypoint';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './PostList.css';

import TextBubble from '../../../UI/TextBubble/TextBubble';
import AnchorButton from '../../../UI/AnchorButton/AnchorButton';
import {SECTION_NAMES, WEBSITE_TEXT} from '../../../../data/constants';
import {setPageLoaded} from '../../../../actions';

/* POSE */
const AnimatedList = posed.div({
    visible: {
        delayChildren: 100,
        staggerChildren: 150
    }
});

const AnimatedPost = posed.div({
    visible: {
        transform: 'scale(1, 1)',
        delay: 600,
        transition: {
            type: 'spring',
            stiffness: 60
        }
    },
    hidden: {
        transform: 'scale(1, 0)'
    }
});

const PostList = props => {

    //specifies whether blog posts should be visible
    const [postsVisible, setPostsVisible] = useState(false);

// offset for triggering animation
    const animationOffset = '30%';

    //shows the posts
    const showPosts = () => {
        setPostsVisible(true);
    };

    //Sets page status as not loaded
    const handleLoaded = () => {
        props.setPageLoaded(false);
    };

    //replaces the last occurence of a string with another string
    const replaceLastOcc = (str, find, replace) => {
        const findIndex = str.lastIndexOf(find); //the index of the phrase to be replaced
        const findLength = find.length; //the length to be replaced
        return str.substring(0, findIndex).concat(replace, str.substring(findIndex + findLength));
    };

    //removes 'read more' button from Worpdress excerpt
    const handleExcerpt = (excerpt) => {
        let modifiedExcerpt = replaceLastOcc(excerpt, '</p>', '&hellip;</p>'); //excerpt with added ellipsis at the end
        return modifiedExcerpt.split('<div>')[0].concat(WEBSITE_TEXT.blog.readMore); //extract excerpt until the pair tags & replace the cut part with 'read  more' link
    };

    useEffect(() => {
        setPostsVisible(false); //turn off posts so the animation can play again
    }, [props.match.params]);

    return (
        <Container
            className="lightBackground sectionContent"
        >
            <Row>
                <Col>
                    <h1 id={SECTION_NAMES.blog[0].id}>
                        {SECTION_NAMES.blog[0].name}
                    </h1>
                </Col>
            </Row>
            <Row className="separator"></Row>
            <Waypoint
                onEnter={() => showPosts()}
                bottomOffset={animationOffset}
            />
            <Row className="horizontallyCentered">
                <Col xs={10} sm={12} md={10}>
                    <AnimatedList
                        pose={postsVisible ? 'visible' : 'hidden'}
                    >
                        {props.posts.map((post, k) => (
                            <AnimatedPost
                                pose={postsVisible ? 'visible' : 'hidden'}
                                key={k}
                            >
                                {(props.currPost !== k) &&
                                <Link
                                    to={props.shortenUrl(post.link)}
                                    onClick={() => handleLoaded()}
                                >
                                    <TextBubble
                                        type="hoverable"
                                    >
                                        <h2
                                            dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                                    </TextBubble>
                                </Link>
                                }
                            </AnimatedPost>
                        ))}
                    </AnimatedList>
                </Col>
            </Row>
            {(props.posts.length > 5) &&
            <AnchorButton
                target={SECTION_NAMES.blog[0].id}
                message={WEBSITE_TEXT.blog.backToTop}
                className="bannerButton"
            />}
        </Container>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPageLoaded
    }, dispatch);
};
export default connect(null, mapDispatchToProps)(PostList);