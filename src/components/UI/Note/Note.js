import React from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';

import RoundedImage from '../RoundedImage/RoundedImage';
import './Note.css';


const Note = (props) => {

    //constant containing the image column
    const imageColumn = (<Col
        md={3}
        className="centeredBothWays noteColumn"
    >
        <RoundedImage
            source={props.source}
            altText={props.altText}
        />
    </Col>);

    //constant containing the text column
    const textColumn = (
        <Col
            className="verticallyCentered noteColumn"
        >
            {props.children}
        </Col>
    );

    //variable holding the entire content
    let content;

    //depending on the note's order, display on left or right; on mobile devices display on top

    if (props.mobile) {
        content = <React.Fragment>{imageColumn}{textColumn}</React.Fragment>;
    } else {
        if (props.order%2 !== 0) {
            content = <React.Fragment>{imageColumn}{textColumn}</React.Fragment>;
        } else {
            content = <React.Fragment>{textColumn}{imageColumn}</React.Fragment>;
        }

    }


    return (
        <Row>
            {content}
        </Row>
    );
};

const mapStateToProps = state => {
    return {
        mobile: state.isMobile
    };
};


export default connect(mapStateToProps)(Note);