import React, {useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';

import TextBubble from '../../../UI/TextBubble/TextBubble';
import {STRINGS_TO_REMOVE, WEBSITE_TEXT} from "../../../../data/constants";

const DisplayedPost = props => {

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

    return(
        <Container className="lightBackground">
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

export default DisplayedPost;