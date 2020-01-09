import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import './Offer.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";
import {Waypoint} from "react-waypoint";

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
                    {FILLER}
                </Row>
            </Container>
        </div>
    );
};

export default Offer;