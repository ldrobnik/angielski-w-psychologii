import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import TextBubble from '../../../UI/TextBubble/TextBubble';
import AnchorButton from '../../../UI/AnchorButton/AnchorButton';
import {SECTION_NAMES, WEBSITE_TEXT} from "../../../../data/constants";
import {setPageLoaded} from "../../../../actions";

const PostList = props => {

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

    return(
        <Container className="lightBackground sectionContent">
            <Row>
                <h1 id={SECTION_NAMES.blog[0].id}>
                    {SECTION_NAMES.blog[0].name}
                </h1>
            </Row>
            <Row className="separator"></Row>
            <Row className="horizontallyCentered">
                {props.posts.map((post, index) => (
                    <Link
                        to={props.shortenUrl(post.link)}
                        className={(props.currPost === index) && 'translucent'}
                        key={index}
                        onClick={() => handleLoaded()}
                    >
                        <TextBubble
                            type="hoverable"
                        >
                            <h2
                                dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                            <div
                                dangerouslySetInnerHTML={{__html: handleExcerpt(post.excerpt.rendered)}}/>
                        </TextBubble>
                    </Link>
                ))}
            </Row>
            <AnchorButton
                target="top"
                message={WEBSITE_TEXT.blog.backToTop}
                className="bannerButton"
            />
        </Container>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPageLoaded
    }, dispatch);
};
export default connect(null, mapDispatchToProps)(PostList);