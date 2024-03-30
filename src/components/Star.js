import React from "react";
import starfilled from "../images/star-filled.png";
import starempty from "../images/star-empty.png";

function Star(props) {
    let isFilled=props.isFilled;
    let starIcon=isFilled? starfilled : starempty;
    let toggleFavorite=props.toggleFavorite
  return (
    <img onClick={toggleFavorite} className="star" src={starIcon} alt="" />
  );
}

export default Star;
