import React from "react";

import "./PosterBubble.css";

const PosterBubble = (props) => {
  return <div className={`${props.type}PosterBubble`}>{props.children}</div>;
};

export default PosterBubble;
