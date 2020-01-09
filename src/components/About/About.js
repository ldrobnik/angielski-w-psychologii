import React, {useState, useEffect} from 'react';
import {Row, Container, Col} from 'react-bootstrap';
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
        delayChildren: 400,
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
        console.log('enter');
    };


    useEffect(() => {
            // setTimeout(showMessages, 1000);
        }
    );

    return (
        <React.Fragment>

        <div className="lightBackground sectionContent">

            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[0].id}>
                        {SECTION_NAMES[0].name}
                    </h1>
                </Row>

                <Row>
                    <div className="introduction">
                        <h2>{WEBSITE_TEXT.about.name}</h2>
                        <p>{WEBSITE_TEXT.about.description}</p>
                        <Row className="separator">
                        </Row>
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
            />
        </React.Fragment>
    );
};

export default About;