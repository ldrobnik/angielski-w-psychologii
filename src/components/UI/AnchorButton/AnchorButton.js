import React, {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './AnchorButton.css';

import {OFFSET_DESKTOP, OFFSET_MOBILE, MOBILE_BREAKPOINT} from '../../../data/constants';


const AnchorButton = (props) => {

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // Specifies whether the app is displayed on a mobile device
    const isMobile = windowWidth < MOBILE_BREAKPOINT;

    //Specifies smooth scroll offset depending on the window width
    const scrollOffset = isMobile ? OFFSET_MOBILE : OFFSET_DESKTOP;


    // Adds an event listener to monitor the screen width and remove the listener when the component unmounts
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    return (
            <AnchorLink
                href={`#${props.target}`}
                offset={scrollOffset}
                className="anchorButton">
                    {props.message}
            </AnchorLink>
    );
};

export default AnchorButton;