import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import posed from 'react-pose';
import {Container, Row, Col} from 'react-bootstrap';

import TextBubble from '../../../UI/TextBubble/TextBubble';
import logoImage from '../../../../assets/images/logo.svg';
import {STRINGS_TO_REMOVE, STRINGS_TO_REPLACE, WEBSITE_TEXT} from "../../../../data/constants";
import {setPageLoaded} from "../../../../actions";

const AnimatedPost = posed.div({
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1000
        }
    },
    hidden: {
        opacity: 0
    }
});

const DisplayedPost = props => {

    const [postLoaded, setPostLoaded] = useState(false);

    //Sets page as loaded after an interval
    const handleLoaded = () => {
        setTimeout(() => {
            props.setPageLoaded(true)
        }, 800);
    };

    //in a given string, replaces all instances of text with another text
    const replaceString = (str, find, newText) => {
        return str ? str.replace(new RegExp(find, 'g'), newText) : '';
    };

    //removes unused Wordpress classes from post content
    const cleanUpPost = (content) => {
        let modifiedContent = content;

        //loop through array of string to remove and remove them
        for (let i = 0; i < STRINGS_TO_REMOVE.length; i++) {
            modifiedContent = replaceString(modifiedContent, STRINGS_TO_REMOVE[i], '');
        }

        //loop through array of strings to replace and replace them
        for (let i = 0; i < STRINGS_TO_REPLACE.length; i++) {
            modifiedContent = replaceString(modifiedContent, STRINGS_TO_REPLACE[i][0], STRINGS_TO_REPLACE[i][1]);
        }
        //return cleaned up content
        return modifiedContent;
    };

    useEffect(() => {
        setPostLoaded(false); //hide post content
        document.title = `${WEBSITE_TEXT.pageTitle.core} - ${props.post.title.rendered}`; //update document title
    }, [props.post.title.rendered]);

    useEffect(() => {
        if (props.post.title.rendered.length > 1) {
            handleLoaded(); //if post data have been obtained, turn off spinner
        };
    }, [props.post.title.rendered]);

    useEffect(() => {
        //show post content after a while
       setTimeout(() => setPostLoaded(true), 2000);
    });

    return (
        <Container className="lightBackground horizontallyCentered">

            <Row className="horizontallyCentered">
                <Col>
                    {props.post &&
                    <TextBubble
                        type="blog"
                    >
                        {(props.loaded && !postLoaded) && <div className="spinnerWrapper">

                            <img
                                src={logoImage}
                                alt="loading…"
                                height="110px"
                                width="110px"
                            />

                        </div>}
                        <AnimatedPost
                            pose={postLoaded ? 'visible' : 'hidden'}>
                            <h2
                                dangerouslySetInnerHTML={{__html: props.post.title.rendered}}/>

                                <div
                                className="blogPost"
                                dangerouslySetInnerHTML={{__html: cleanUpPost(props.post.content.rendered)}}/>
                        </AnimatedPost>
                    </TextBubble>
                    }
                </Col>
            </Row>

        </Container>
    );
};

const mapStateToProps = state => {
    return {
        loaded: state.pageLoaded
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPageLoaded
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayedPost);