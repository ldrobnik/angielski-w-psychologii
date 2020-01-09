import React, {useState, useEffect} from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import posed from 'react-pose';
import TextBubble from '../UI/TextBubble/TextBubble';
import Portrait from './Portrait/Portrait';
import './About.css';
import photo from '../../assets/images/portrait.jpg';

import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";
import {Waypoint} from "react-waypoint";

/* POSE */
const AnimatedList = posed.div({
    visible: {
        delayChildren: 800,
        staggerChildren: 350
    }
});

const AnimatedMessage = posed.div({
    visible: {
        x: '0%',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        x: '300%'
    }
});

const About = (props) => {

    //specifies whether text links should be visible
    const [messagesVisible, setMessagesVisible] = useState(false);


    //shows the messages
    const showMessages = () => {
        setMessagesVisible(true);
    };

    //offset for triggering animation - larger for mobile
    const animationOffset = props.mobile ? "-50%" : "-40%";
    return (
        <React.Fragment>

        <div className="lightBackground sectionContent">

            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[0].id}>
                        {SECTION_NAMES[0].name}
                    </h1>
                </Row>
                <Row className="separator">
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
                            <AnimatedList
                                pose={messagesVisible ? 'visible' : 'hidden'}
                            >
                                {WEBSITE_TEXT.about.details.map((bubble, k) => {
                                        return (
                                            <AnimatedMessage
                                                pose={messagesVisible ? 'visible' : 'hidden'}
                                                key={k}
                                            >
                                                <TextBubble
                                                    type="theme"
                                                >
                                                    {bubble}
                                                </TextBubble>
                                            </AnimatedMessage>
                                        )
                                    }
                                )}
                            </AnimatedList>
                    </Col>
                </Row>
            </Container>
        </div>
            <Waypoint
                onEnter={() => showMessages()}
                bottomOffset={animationOffset}
            />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        mobile: state.isMobile
    };
};

export default connect(mapStateToProps)(About);