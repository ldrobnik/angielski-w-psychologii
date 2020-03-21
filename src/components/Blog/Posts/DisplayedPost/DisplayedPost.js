import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Container, Row} from 'react-bootstrap';

import TextBubble from '../../../UI/TextBubble/TextBubble';
import {STRINGS_TO_REMOVE, WEBSITE_TEXT} from "../../../../data/constants";
import {setPageLoaded} from "../../../../actions";

const DisplayedPost = props => {

    //Sets page as loaded after an interval
    const handleLoaded = () => {
        setTimeout(() => {
            props.setPageLoaded(true)
        }, 800);
    };

    //removes all instances of a string from another string
    const removeString = (str, find) => {
        return str ? str.replace(new RegExp(find, 'g'), '') : '';
    };

    //removes unused Wordpress classes from post content
    const cleanUpPost = (content) => {
        let modifiedContent = content;

        //loop through array of string to remove and remove them
        for (let i = 0; i < STRINGS_TO_REMOVE.length; i++) {
            modifiedContent = removeString(modifiedContent, STRINGS_TO_REMOVE[i]);
        }

        //return cleaned up content
        return modifiedContent;
    };

    useEffect(() => {
        document.title = `${WEBSITE_TEXT.pageTitle.core} - ${props.post.title.rendered}`; //update document title
    }, [props.post.title.rendered]);

    useEffect(() => {
        if (props.post.title.rendered.length > 1) {
          handleLoaded(); //if post data have been obtained, turn off spinner
        };
    }, [props.post.title.rendered, handleLoaded]);

    return(
        <Container className="lightBackground horizontallyCentered">
            <Row className="horizontallyCentered">
                {props.post &&
                <TextBubble
                    type="blog"
                >
                    <h2
                        dangerouslySetInnerHTML={{__html: props.post.title.rendered}}/>
                    <div
                        className="blogPost"
                        dangerouslySetInnerHTML={{__html: cleanUpPost(props.post.content.rendered)}}/>
                </TextBubble>
                }
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPageLoaded
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(DisplayedPost);