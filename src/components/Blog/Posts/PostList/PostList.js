import React, {useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';

import TextBubble from '../../../UI/TextBubble/TextBubble';
import {SECTION_NAMES} from "../../../../data/constants";

const PostList = props => {

    //removes 'read more' button from Worpdress excerpt
    const handleExcerpt = (excerpt) => {
        return excerpt.split("<div>")[0];
    };
    //
    // useEffect(() => {
    //     handleExcerpt(posts[0].excerpt.rendered);
    // });

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
                    <React.Fragment
                        key={index}
                    >
                        <TextBubble
                            type="blog"
                        >
                            <h2
                                dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                            <div
                                dangerouslySetInnerHTML={{__html: handleExcerpt(post.excerpt.rendered)}}/>
                        </TextBubble>
                    </React.Fragment>
                ))}
            </Row>
        </Container>
    );
};

export default PostList;