import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import {Row, Container, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import posed from 'react-pose';
import TextBubble from '../UI/TextBubble/TextBubble';
import Portrait from './Portrait/Portrait';
import './About.css';

import photo from '../../assets/images/portrait.jpg';
import {SECTION_NAMES, WEBSITE_TEXT} from '../../data/constants';
import {setActiveSection} from '../../actions';

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

const AnimatedMessageRight = posed.div({
    visible: {
        x: '0%',
        opacity: '1',
        transition: {
            type: 'spring',
            stiffness: 80
        }
    },
    hidden: {
        x: '300%',
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
        props.setActiveSection(SECTION_NAMES.main[0].id);
    };

    const details = WEBSITE_TEXT.about.details;
    const pose = messagesVisible ? 'visible' : 'hidden';

    //mobile: portrait on top, all bubbles below stacked
    const mobileContent = (
        <Row>
            <Col xs={12} className="verticallyCentered">
                <Portrait
                    source={photo}
                    altText={WEBSITE_TEXT.about.altText}
                />
            </Col>
            <Col xs={12} className="verticallyCentered aboutTextBubbles">
                <AnimatedList pose={pose}>
                    {details.map((bubble, k) => (
                        <AnimatedMessage pose={pose} key={k}>
                            <TextBubble type="light">{bubble}</TextBubble>
                        </AnimatedMessage>
                    ))}
                </AnimatedList>
            </Col>
        </Row>
    );

    //desktop: top row has 3 bubbles left + portrait right (vertically centered),
    //         bottom rows alternate left/right for remaining 4 bubbles.
    //         Single AnimatedList wraps everything so stagger applies in DOM order.
    const desktopContent = (
        <AnimatedList pose={pose}>
            <Row className="align-items-center">
                <Col md={6} className="aboutTextBubbles">
                    <AnimatedMessage pose={pose}>
                        <TextBubble type="light">{details[0]}</TextBubble>
                    </AnimatedMessage>
                    <AnimatedMessage pose={pose}>
                        <TextBubble type="light">{details[1]}</TextBubble>
                    </AnimatedMessage>
                    <AnimatedMessage pose={pose}>
                        <TextBubble type="light">{details[2]}</TextBubble>
                    </AnimatedMessage>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center aboutPortraitCol">
                    <Portrait
                        source={photo}
                        altText={WEBSITE_TEXT.about.altText}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6} className="aboutTextBubbles">
                    <AnimatedMessage pose={pose}>
                        <TextBubble type="light">{details[3]}</TextBubble>
                    </AnimatedMessage>
                </Col>
                <Col md={6} className="aboutTextBubbles">
                    <AnimatedMessageRight pose={pose}>
                        <TextBubble type="light">{details[4]}</TextBubble>
                    </AnimatedMessageRight>
                </Col>
                <Col md={6} className="aboutTextBubbles">
                    <AnimatedMessage pose={pose}>
                        <TextBubble type="light">{details[5]}</TextBubble>
                    </AnimatedMessage>
                </Col>
                <Col md={6} className="aboutTextBubbles">
                    <AnimatedMessageRight pose={pose}>
                        <TextBubble type="light">{details[6]}</TextBubble>
                    </AnimatedMessageRight>
                </Col>
            </Row>
        </AnimatedList>
    );

    const mainContent = props.mobile ? mobileContent : desktopContent;

    //offset for triggering animation - larger for mobile
    const animationOffset = props.mobile ? '-80%' : '-150px';

    return (
        <React.Fragment>
            <div className="lightBackground sectionContent">
                <Container>
                    <Row>
                        <h1 id={SECTION_NAMES.main[0].id}>
                            {SECTION_NAMES.main[0].name}
                        </h1>
                    </Row>
                    <Row className="separator">
                    </Row>
                    <Waypoint
                        onEnter={() => setSection()}
                    />
                    <Row>
                        <div className="introduction">
                            <h2>{WEBSITE_TEXT.about.name}</h2>
                            <p>{WEBSITE_TEXT.about.description}</p>
                        </div>
                    </Row>
                    {mainContent}
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
