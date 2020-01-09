import React, {useState} from 'react';
import {Image} from 'react-bootstrap';
import posed from 'react-pose';

import "./Portrait.css";

/* POSE */
const AnimatedPic = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            ease: 'easeIn',
            duration: 500 }
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});


const Portrait = (props) => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //sets photo visibility to true
    const showPhoto = () => {
        setVisible(true);
    };

    return (
        <AnimatedPic
            pose={visible ? 'visible' : 'hidden'}
            className="portraitWrapper">
            <Image
                src={props.source}
                alt={props.altText}
                onLoad={showPhoto}
                className="portrait"
                fluid
            />
        </AnimatedPic>
    );
};

export default Portrait;