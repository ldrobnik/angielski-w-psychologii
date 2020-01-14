import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './AnchorButton.css';

import {OFFSET_DESKTOP} from '../../../data/constants';

const AnchorButton = (props) => {

    return (
            <AnchorLink
                href={`#${props.target}`}
                offset={OFFSET_DESKTOP}
                className="anchorButton">
                    {props.message}
            </AnchorLink>
    );
};

export default AnchorButton;