import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Row, Col, Container} from 'react-bootstrap';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";
import './Contact.css';

import TextBubble from '../UI/TextBubble/TextBubble';
import CopyrightNote from '../UI/CopyrightNote/CopyrightNote';

import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";
import {setActiveSection} from "../../actions";

/* POSE */
const AnimatedMessageLeft = posed.div({
    visible: {
        transform: 'scale(1, 1)',
        opacity: 1,
        delay: 400,
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
        delay: 800,
        transition: {
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

    //sets current section as active
    const setSection = () => {
        props.setActiveSection(SECTION_NAMES.main[4].id);
    };

    //offset for triggering animation - larger for mobile
    const animationOffset = props.mobile ? "200px" : "300px";

    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => showMessages()}
                bottomOffset={animationOffset}
            />
            <div className="lightBackground sectionContent">
                <Container>
                    <Row>
                        <h1 id={SECTION_NAMES.main[4].id}>
                            {SECTION_NAMES.main[4].name}
                        </h1>
                    </Row>
                    <Row className="separator"></Row>
                    <Waypoint
                        onEnter={() => setSection()}
                    />
                    <Row>
                        <Col lg={6}>
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
                                        <div className="availableHours">
                                            <h3>
                                                {WEBSITE_TEXT.contact.available.title}
                                            </h3>
                                            <div className="hoursListContainer">
                                                    {WEBSITE_TEXT.contact.available.hours.map((hour, k) => {
                                                            return (
                                                                <div
                                                                    className="hoursItem"
                                                                    key={k}
                                                                >
                                                                    {hour}
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                            </div>
                                            <div className="hoursNote">
                                                {WEBSITE_TEXT.contact.available.info}
                                            </div>
                                        </div>
                                    </div>
                                </TextBubble>
                            </AnimatedMessageRight>
                        </Col>

                    </Row>
                </Container>
                <CopyrightNote />
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        mobile: state.isMobile
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setActiveSection}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);