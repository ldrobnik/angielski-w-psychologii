import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Container} from 'react-bootstrap';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";
import './Contact.css';

import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";

/* POSE */
const AnimatedMessageLeft = posed.div({
    visible: {
        x: '0%',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        x: '-500%'
    }
});

const AnimatedMessageRight = posed.div({
    visible: {
        x: '0%',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        x: '500%'
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
    const animationOffset = props.mobile ? "50px" : "100px";

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
                        <Col md={4}>
                            <AnimatedMessageLeft
                                pose={messagesVisible ? 'visible' : 'hidden'}
                            >details</AnimatedMessageLeft>
                        </Col>
                        <Col>
                            <AnimatedMessageRight
                                pose={messagesVisible ? 'visible' : 'hidden'}
                            >hours</AnimatedMessageRight>
                        </Col>

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