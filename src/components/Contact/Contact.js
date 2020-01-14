import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Container} from 'react-bootstrap';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";
import './Contact.css';

import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";

/* POSE */
const AnimatedMessageLeft = posed.div({
    visible: {
        transform: 'scale(1, 1)',
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80
        }
    },
    hidden: {
        transform: 'scale(0, 1)',
        opacity: 0
    }
});

const AnimatedMessageRight = posed.div({
    visible: {
        transform: 'scale(1, 1)',
        opacity: 1,
        transition: {
            delay: 400,
            type: 'spring',
            stiffness: 80
        }
    },
    hidden: {
        transform: 'scale(1, 0)',
        opacity: 0
    }
});

const Contact = (props) => {

    //specifies whether text links should be visible
    const [messagesVisible, setMessagesVisible] = useState(false);


    //shows the messages
    const showMessages = () => {
        setMessagesVisible(true);
    };

    //offset for triggering animation - larger for mobile
    const animationOffset = props.mobile ? "25px" : "50px";

    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => showMessages()}
                bottomOffset={animationOffset}
            />
            <div className="lightBackground sectionContent">
                <Container>
                    <Row>
                        <h1 id={SECTION_NAMES[4].id}>
                            {SECTION_NAMES[4].name}
                        </h1>
                    </Row>
                    <Row className="separator"></Row>
                    <Row>
                        <Col lg={5}>
                            <AnimatedMessageLeft
                                pose={messagesVisible ? 'visible' : 'hidden'}
                            >
                                <TextBubble
                                    type="light"
                                >
                                    <div className="contactBox verticallyCentered">
                                        <div className="contactDetails">
                                            {WEBSITE_TEXT.contact.details.map((detail, k) => {
                                                    return (
                                                        <div
                                                            className="contactItem verticallyCentered"
                                                            key={k}
                                                        >
                                                            <p>
                                                                {detail}
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </TextBubble>
                            </AnimatedMessageLeft>
                        </Col>
                        <Col>
                            <AnimatedMessageRight
                                pose={messagesVisible ? 'visible' : 'hidden'}
                            >
                                <TextBubble
                                    type="light"
                                >
                                    <div className="contactBox verticallyCentered">
                                        <div class="availableHours">
                                            <h3>
                                                {WEBSITE_TEXT.contact.available.title}
                                            </h3>
                                            <ul>
                                                {WEBSITE_TEXT.contact.available.hours.map((hour, k) => {
                                                        return (
                                                            <li>
                                                                {hour}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                            <div className="hoursNote">
                                                {WEBSITE_TEXT.contact.available.info}
                                            </div>
                                        </div>
                                    </div>
                                </TextBubble>
                            </AnimatedMessageRight>
                        </Col>

                    </Row>
                    <Row className="copyrightNote centeredBothWays">
                        {WEBSITE_TEXT.contact.copyrightNotice}
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        mobile: state.isMobile
    };
};

export default connect(mapStateToProps)(Contact);