import React from "react";
import {Container, Row} from "react-bootstrap";
import {WEBSITE_TEXT} from "../../../data/constants";
import './CopyrightNote.css';

const CopyrightNote = () => {
    return (
        <Container>
            <Row className="copyrightNote centeredBothWays">
                {WEBSITE_TEXT.contact.copyrightNotice}
            </Row>
        </Container>
    );
};

export default CopyrightNote;