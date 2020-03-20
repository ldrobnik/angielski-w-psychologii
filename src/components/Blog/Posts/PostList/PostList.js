import React from 'react';
import {Container, Row} from 'react-bootstrap';

import TextBubble from '../../../UI/TextBubble/TextBubble';
import {SECTION_NAMES} from "../../../../data/constants";

const PostList = props => {

    return(
        <Container className="lightBackground sectionContent">
            <Row>
                <h1 id={SECTION_NAMES.blog[0].id}>
                    {SECTION_NAMES.blog[0].name}
                </h1>
            </Row>
            <Row className="separator"></Row>
            <Row>
                {props.posts.map((post, index) => (
                    <React.Fragment
                        key={index}
                    >
                        <TextBubble
                            type="blog"
                        >
                            <h2
                                dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                            <div
                                className="blogPost"
                                dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                        </TextBubble>
                    </React.Fragment>
                ))}
            </Row>
        </Container>
    );
};

export default PostList;