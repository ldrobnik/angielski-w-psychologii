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

    //removes 'read more' button from Worpdress excerpt
    const handleExcerpt = (excerpt) => {
        return excerpt.split("<div>")[0];
    };

    useEffect(() => {
        console.log(props.url, props.shortenUrl(props.posts[0].link));
    });
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