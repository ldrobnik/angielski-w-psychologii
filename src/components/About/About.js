import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {Row, Container, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Waypoint} from "react-waypoint";
import posed from 'react-pose';
import TextBubble from '../UI/TextBubble/TextBubble';
import Portrait from './Portrait/Portrait';
import './About.css';

import photo from '../../assets/images/portrait.jpg';
import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";
import {setActiveSection} from "../../actions";

/* POSE */
const AnimatedList = posed.div({
    visible: {
        delayChildren: 100,
        staggerChildren: 350
    }
});

const AnimatedMessage = posed.div({
    visible: {
        x: '0%',
        opacity: '1',
        transition: {
            type: 'spring',
            stiffness: 80
        }
    },
    hidden: {
        x: '-300%',
        opacity: '0'
    }
});

const About = (props) => {

    //specifies whether text links should be visible
    const [messagesVisible, setMessagesVisible] = useState(false);


    //shows the messages
    const showMessages = () => {
        setMessagesVisible(true);
    };

    //sets current section as active
    const setSection = () => {
        props.setActiveSection(SECTION_NAMES[0].id);
    };

    //contains the portrait jsx
    const portrait = (
        <Col
            md={5}
            className="verticallyCentered"
        >
            <Portrait
                source={photo}
                altText={WEBSITE_TEXT.about.altText}
            />
        </Col>
    );
    //contains the text bubble jsx
    const textBubbles = (
        <Col
            className="verticallyCentered aboutTextBubbles"
            md={7}
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
                                    type="light"
                                >
                                    {bubble}
                                </TextBubble>
                            </AnimatedMessage>
                        )
                    }
                )}
            </AnimatedList>
        </Col>
    );
    //shows different content order on mobile and larger screens
    const mainContent = props.mobile ? <React.Fragment>{portrait}{textBubbles}</React.Fragment> : <React.Fragment>{textBubbles}{portrait} </React.Fragment>;

    //offset for triggering animation - larger for mobile
    const animationOffset = props.mobile ? "-80%" : "-150px";
    return (
        <React.Fragment>

        <div className="lightBackground sectionContent">
            <Waypoint
                onEnter={() => setSection()}
            />
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
                    {mainContent}
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setActiveSection}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(About);