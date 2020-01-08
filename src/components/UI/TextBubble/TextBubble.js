import React, {useState, useEffect} from 'react';

import './TextBubble.css';


const TextBubble = (props) => {

    return (
        <div className={`${props.type}TextBubble`}>
            {props.message}
        </div>
    );
};

export default TextBubble;