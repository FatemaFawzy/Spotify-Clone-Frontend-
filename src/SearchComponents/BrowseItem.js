import React from "react";
import "./BrowseItem.css";

const BrowseItem = (props) => {

  const style = {
    backgroundColor: props.color
  };

  const givenclass = props.special == "true" ? "browse-item special-browse" : "browse-item";
  return (
    <div className={givenclass} style={style} >

      <h3 className="head-style">{props.header}</h3>
      <img src={props.image} className="img-style" />

    </div>
  )
}

export default BrowseItem;