import React from "react";
import "./ItemSearched.css";

const ItemSearched = (props) => {

  const roundImgOrNot = props.roundimage ? "i-am-round-img" : "i-am-not";

  var actualName;
  if (props.name.length > 17) {
    actualName = props.name.slice(0, 17) + "...";
  } else {
    actualName = props.name;
  }

  return (
    <div className="item-searched-class">

      <img src={props.image} id={roundImgOrNot} className="img-style-searched" />
      <p>{actualName}</p>
      <a href="#">{props.subname}</a>
      <button><i class="fas fa-play"></i></button>

    </div>
  )
}

export default ItemSearched;