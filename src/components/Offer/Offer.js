import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Container } from "react-bootstrap";
import posed from "react-pose";
import { Waypoint } from "react-waypoint";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Offer.css";
import { SECTION_NAMES, WEBSITE_TEXT } from "../../data/constants";
import { setActiveSection } from "../../actions";
import TextBubble from "../UI/TextBubble/TextBubble";
import PosterBubble from "../UI/PosterBubble/PosterBubble";
import poster1 from "../../assets/images/poster1.jpg";
import poster2 from "../../assets/images/poster2.jpg";
import poster3 from "../../assets/images/poster3.jpg";

/* POSE */
const AnimatedMessageLeft = posed.div({
  visible: {
    x: "0%",
    opacity: "1",
    delay: "600",
    transition: {
      type: "spring",
      stiffness: 90,
    },
  },
  hidden: {
    x: "-500%",
    opacity: "0",
  },
});

const AnimatedMessageRight = posed.div({
  visible: {
    x: "0%",
    opacity: "1",
    delay: "600",
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hidden: {
    x: "500%",
    opacity: "0",
  },
});

const Offer = (props) => {
  //specifies whether text links should be visible
  const [messagesVisible, setMessagesVisible] = useState(false);

  //shows the messages
  const showMessages = () => {
    setMessagesVisible(true);
  };

  //sets current section as active
  const setSection = () => {
    props.setActiveSection(SECTION_NAMES.main[3].id);
  };

  //offset for triggering animation - larger for mobile
  const animationOffset = props.mobile ? "30%" : "250px";

  return (
    <React.Fragment>
      <Waypoint onEnter={() => showMessages()} bottomOffset={animationOffset} />
      <div className="sectionContent">
        <Container>
          <Row>
            <h1 id={SECTION_NAMES.main[3].id}>{SECTION_NAMES.main[3].name}</h1>
          </Row>
          <Row className="separator"></Row>
          <Waypoint onEnter={() => setSection()} />
          <Row className="offerRow">
            <Col className="offerColumn" lg={{ span: 8, offset: 2 }}>
              <AnimatedMessageLeft
                pose={messagesVisible ? "visible" : "hidden"}
              >
                <AnchorLink href="#kontakt">
                  <TextBubble type="theme">
                    <div className="offerBox">
                      <div>
                        <h2 className="serviceName">
                          {WEBSITE_TEXT.offer.english.title}
                        </h2>
                      </div>
                      <Row>
                        {WEBSITE_TEXT.offer.english.content.map((item, k) => {
                          return (
                            <div key={k} className="serviceItem">
                              <div className="serviceType">{item.type}</div>
                              <div className="servicePrice">{item.price}</div>
                              {item.explanation && (
                                <div className="serviceExplanation">
                                  {item.explanation}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </Row>
                    </div>
                  </TextBubble>
                </AnchorLink>
              </AnimatedMessageLeft>
            </Col>
          </Row>
          <Row className="offerRow">
            <Col className="offerColumn" lg={{ span: 8, offset: 2 }}>
              <AnimatedMessageRight
                pose={messagesVisible ? "visible" : "hidden"}
              >
                <AnchorLink href="#kontakt">
                  <PosterBubble type="light">
                    <img
                      src={poster1}
                      alt={WEBSITE_TEXT.offer.posterAltTexts[0]}
                    />
                  </PosterBubble>
                </AnchorLink>
              </AnimatedMessageRight>
            </Col>
          </Row>
          <Row className="offerRow">
            <Col className="offerColumn" lg={{ span: 8, offset: 2 }}>
              <AnimatedMessageLeft
                pose={messagesVisible ? "visible" : "hidden"}
              >
                <AnchorLink href="#kontakt">
                  <PosterBubble type="light">
                    <img
                      src={poster2}
                      alt={WEBSITE_TEXT.offer.posterAltTexts[1]}
                    />
                  </PosterBubble>
                </AnchorLink>
              </AnimatedMessageLeft>
            </Col>
          </Row>
          <Row className="offerRow">
            <Col className="offerColumn" lg={{ span: 8, offset: 2 }}>
              <AnimatedMessageRight
                pose={messagesVisible ? "visible" : "hidden"}
              >
                <AnchorLink href="#kontakt">
                  <PosterBubble type="light">
                    <img
                      src={poster3}
                      alt={WEBSITE_TEXT.offer.posterAltTexts[2]}
                    />
                  </PosterBubble>
                </AnchorLink>
              </AnimatedMessageRight>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    mobile: state.isMobile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setActiveSection }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
