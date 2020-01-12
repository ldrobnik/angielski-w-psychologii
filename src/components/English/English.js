import React, {useState, useEffect} from 'react';
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

/* POSE */
const AnimatedList = posed.div({
    visible: {
        delayChildren: 100,
        staggerChildren: 350
    }
});

const AnimatedMessage = posed.div({
    visible: {
        height: '100%',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        height: '1%'
    }
});

const English = (props) => {

    //specifies whether text links should be visible
    const [messagesVisible, setMessagesVisible] = useState(false);


    //shows the messages
    const showMessages = () => {
        setMessagesVisible(true);
    };

    //array of all illustration sources
    const illustrations = [illustration0, illustration1, illustration2];

    return (
        <React.Fragment>
            <Waypoint
                onEnter={() => showMessages()}
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
                                                    altText={WEBSITE_TEXT.english.altTexts}
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

export default English;