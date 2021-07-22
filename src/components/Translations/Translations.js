import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Container} from 'react-bootstrap';
import posed from 'react-pose';
import {Waypoint} from 'react-waypoint';
import './Translations.css';

import illustration0 from '../../assets/images/translations0.jpg';
import illustration1 from '../../assets/images/translations1.jpg';

import {SECTION_NAMES, WEBSITE_TEXT} from '../../data/constants';
import TextBubble from '../UI/TextBubble/TextBubble';
import Note from '../UI/Note/Note';
import {setActiveSection} from '../../actions';

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
        transition: {
            type: 'spring',
            stiffness: 80
        }
    },
    hidden: {
        transform: 'scale(0, 1)'
    }
});

const Translations = (props) => {

    //specifies whether text links should be visible
    const [messagesVisible, setMessagesVisible] = useState(false);


    //shows the messages
    const showMessages = () => {
        setMessagesVisible(true);
    };

    //sets current section as active
    const setSection = () => {
        props.setActiveSection(SECTION_NAMES.main[2].id);
    };

    //array of all illustration sources
    const illustrations = [illustration0, illustration1];

    //offset for triggering animation - larger for mobile
    const animationOffset = props.mobile ? '50px' : '350px';


    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => showMessages()}
                bottomOffset={animationOffset}
            />
            <div className="lightBackground sectionContent">
                <Container>
                    <Row>
                        <h1 id={SECTION_NAMES.main[2].id}>
                            {SECTION_NAMES.main[2].name}
                        </h1>
                    </Row>
                    <Row className="separator"></Row>
                    <Waypoint
                        onEnter={() => setSection()}
                    />
                    <Row>
                        <AnimatedList
                            pose={messagesVisible ? 'visible' : 'hidden'}
                        >
                            {WEBSITE_TEXT.translations.messages.map((bubble, k) => {
                                    return (
                                        <AnimatedMessage
                                            pose={messagesVisible ? 'visible' : 'hidden'}
                                            key={k}
                                        >
                                            <TextBubble
                                                type="light"
                                            >
                                                <Note
                                                    source={illustrations[k]}
                                                    altText={WEBSITE_TEXT.translations.altTexts[k]}
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

export default connect(mapStateToProps, mapDispatchToProps)(Translations);
