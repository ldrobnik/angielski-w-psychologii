import React, {useState, useEffect} from 'react';
import {Image} from 'react-bootstrap';

import "./Portrait.css";

const Portrait = (props) => {

    return (
        <div className="portraitWrapper">
            <Image
                src={props.source}
                alt={props.altText}
                className="portrait"
                fluid
            />
        </div>
    );
};

export default Portrait;