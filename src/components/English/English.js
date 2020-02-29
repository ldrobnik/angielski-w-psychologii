import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Row, Container} from 'react-bootstrap';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";
import './English.css';
import TextBubble from '../UI/TextBubble/TextBubble';
import Note from '../UI/Note/Note';

import illustration0 from '../../assets/images/english0.jpg';
import illustration1 from '../../assets/images/english1.jpg';
import illustration2 from '../../assets/images/english2.jpg';

import {SECTION_NAMES, WEBSITE_TEXT} from "../../data/constants";
import {setActiveSection} from "../../actions";

/* POSE */
const AnimatedList = posed.div({
    visible: {
        delayChildren: 800,
        staggerChildren: 450
    }
});

const AnimatedMessage = posed.div({
    visible: {
        transform: 'scale(1, 1)',
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 70
        }
    },
    hidden: {
        transform: 'scale(0.5, 0)',
        opacity: 0
    }
});

const English = (props) => {

    //specifies whether text links should be visible
    const [messagesVisible, setMessagesVisible] = useState(false);


    //shows the messages
    const showMessages = () => {
        setMessagesVisible(true);
    };

    //sets current section as active
    const setSection = () => {
        props.setActiveSection(SECTION_NAMES[1].id);
    };


    //array of all illustration sources
    const illustrations = [illustration0, illustration1, illustration2];

    //offset for triggering animation - larger for mobile
    const animationOffset = props.mobile ? "350px" : "300px";

    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => showMessages()}
                bottomOffset={animationOffset}
            />
            <Waypoint
                onEnter={() => setSection()}
            />
            <div className="sectionContent">
                <Container>
                    <Row>
                        <h1 id={SECTION_NAMES[1].id}>
                            {SECTION_NAMES[1].name}
                        </h1>
                    </Row>
                    <Row className="separator"></Row>
                    <Row>
                        <AnimatedList
                            pose={messagesVisible ? 'visible' : 'hidden'}
                        >
                            {WEBSITE_TEXT.english.messages.map((bubble, k) => {
                                    return (
                                        <AnimatedMessage
                                            pose={messagesVisible ? 'visible' : 'hidden'}
                                            key={k}
                                        >
                                            <TextBubble
                                                type="theme"
                                            >
                                                <Note
                                                    source={illustrations[k]}
                                                    altText={WEBSITE_TEXT.english.altTexts[k]}
                                                    order={k}
                                                >
                                                    {bubble}
                                                </Note>
                                            </TextBubble>
                                        </AnimatedMessage>
                                    )
                                }
                            )}
                        </AnimatedList>
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setActiveSection}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(English);