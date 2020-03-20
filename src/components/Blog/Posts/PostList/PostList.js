import React from 'react';
import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import TextBubble from '../../../UI/TextBubble/TextBubble';
import {SECTION_NAMES} from "../../../../data/constants";

const PostList = props => {

    //removes 'read more' button from Worpdress excerpt
    const handleExcerpt = (excerpt) => {
        return excerpt.split("<div>")[0];
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
                        to={shortenUrl(post.link)}
                        className="blogLink"
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
                    </Link>
                ))}
            </Row>
        </Container>
    );
};

export default PostList;