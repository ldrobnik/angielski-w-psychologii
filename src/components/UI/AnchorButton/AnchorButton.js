import React, {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Button} from 'react-bootstrap';

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