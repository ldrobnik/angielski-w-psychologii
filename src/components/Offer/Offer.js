import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import {Waypoint} from "react-waypoint";

import './Offer.css';
import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";
import TextBubble from '../UI/TextBubble/TextBubble';

const Offer = (props) => {

    return (
        <div className="sectionContent">
            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[3].id}>
                        {SECTION_NAMES[3].name}
                    </h1>
                </Row>
                <Row className="separator"></Row>
                <Row>
                    <TextBubble
                        type="theme"
                        className="offerBox"
                    >
                        <h2>{WEBSITE_TEXT.offer.english.title}</h2>
                    </TextBubble>
                </Row>
                <Row>
                    <TextBubble
                        type="theme"
                        className="offerBox"
                    >
                        <h2>{WEBSITE_TEXT.offer.translations.title}</h2>
                    </TextBubble>
                </Row>
            </Container>
        </div>
    );
};

export default Offer;