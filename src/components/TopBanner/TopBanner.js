import React from 'react';
import {bindActionCreators} from "redux";
import {Jumbotron} from 'react-bootstrap';
import {connect} from 'react-redux';
import './TopBanner.css';

import '../UI/AnchorButton/AnchorButton';

import {WEBSITE_TEXT} from "../../data/constants";
import AnchorButton from "../UI/AnchorButton/AnchorButton";
import backdrop from '../../assets/images/backdrop.jpg';
import {setPageLoaded} from "../../actions";

const TopBanner = (props) => {

    //Changes the page loaded state in Redux store
    const handleLoaded = () => {
        props.setPageLoaded(true);
    };

    //title depending on whether the main page is loaded
    const title = props.mainPage ? WEBSITE_TEXT.topBanner.title : WEBSITE_TEXT.blogBanner.title;

    //subtitle depending on whether the main page is loaded
    const subtitle = props.mainPage ? WEBSITE_TEXT.topBanner.subtitle : WEBSITE_TEXT.blogBanner.subtitle;

    //banner class depending on whether the main page is displayed
    const bannerClass = props.mainPage? "verticallyCentered wide" : "verticallyCentered thin";

    return (
        <Jumbotron
            className={bannerClass}
            fluid>
            <div className="bannerContent">
                <h1 className="title">{title}</h1>
                <div className="subtitle">{subtitle}</div>
                {props.mainPage && <AnchorButton
                    target="oferta"
                    message={WEBSITE_TEXT.topBanner.button}
                    className="bannerButton"
                />}
            </div>
            <img
                className="hiddenBackdrop"
                src={backdrop}
                alt={WEBSITE_TEXT.topBanner.backdropAltText}
                onLoad={() => setTimeout(handleLoaded, 1000)}
            />
        </Jumbotron>
    );
};

const mapStateToProps = state => {
    return {
        mainPage: state.mainDisplayed
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageLoaded}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBanner);