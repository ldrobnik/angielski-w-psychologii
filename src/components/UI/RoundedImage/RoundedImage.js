import React, {useState} from 'react';
import posed from 'react-pose';
import {Image} from 'react-bootstrap';

import './RoundedImage.css';

/* POSE */
const AnimatedPic = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            ease: 'easeIn',
            duration: 500
        }
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});

const RoundedImage = (props) => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //sets photo visibility to true
    const showPhoto = () => {
        setVisible(true);
    };

    return (
        <AnimatedPic
            pose={visible ? 'visible' : 'hidden'}
        >
            <Image
                src={props.source}
                alt={props.altText}
                onLoad={showPhoto}
                roundedCircle
                fluid
                className="illustration"
            />
        </AnimatedPic>
    );

};

export default RoundedImage;