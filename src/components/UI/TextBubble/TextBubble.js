import React from 'react';

import './TextBubble.css';


const TextBubble = (props) => {

    return (
        <div className={`${props.type}TextBubble`}>
            {props.children}
        </div>
    );
};

export default TextBubble;