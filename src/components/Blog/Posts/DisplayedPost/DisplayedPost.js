import React from 'react';
import {Container, Row} from 'react-bootstrap';

import TextBubble from '../../../UI/TextBubble/TextBubble';

const DisplayedPost = props => {

    return(
        <Container className="lightBackground">
            <Row>
                <TextBubble
                    type="blog"
                >
                    <h2
                        dangerouslySetInnerHTML={{__html: props.post.title.rendered}}/>
                    <div
                        className="blogPost"
                        dangerouslySetInnerHTML={{__html: props.post.content.rendered}}/>
                </TextBubble>
            </Row>
        </Container>
    );
};

export default DisplayedPost;