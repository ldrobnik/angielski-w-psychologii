import React, {useState, useEffect} from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import TextBubble from '../UI/TextBubble/TextBubble';
import Portrait from './Portrait/Portrait';
import './About.css';
import photo from '../../assets/images/portrait.jpg';

import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";

const About = (props) => {

    return (
        <div className="lightBackground sectionContent">
            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[0].id}>
                        {SECTION_NAMES[0].name}
                    </h1>
                </Row>
                <Row>
                    <div className="introduction">
                        <h2>{WEBSITE_TEXT.about.name}</h2>
                        <p>{WEBSITE_TEXT.about.description}</p>
                    </div>
                </Row>
                <Row>
                    <Col
                        md={5}
                        className="verticallyCentered"
                    >
                        <Portrait
                            source={photo}
                            altText={WEBSITE_TEXT.about.altText}
                        />
                    </Col>
                    <Col
                        className="verticallyCentered"
                    >
                        {WEBSITE_TEXT.about.details.map((bubble, k) => {
                                return (
                                    <TextBubble
                                        type="theme"
                                        message={bubble}
                                        key={k}
                                    />
                                )
                            }
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;