import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import './English.css';
import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const English = (props) => {

    return (
        <div className="sectionContent">
            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[1].id}>
                        {SECTION_NAMES[1].name}
                    </h1>
                </Row>
                <Row className="separator"></Row>
                <Row>
                    <TextBubble type="light">{FILLER}</TextBubble>

                </Row>
            </Container>
        </div>
    );
};

export default English;