import React from "react"
import  "./TopResultItem.css"

const TopResultItem =(props) =>{

    const roundImgOrNot= props.type==="artist"?"i-am-top-and-round-img":"i-am-top-and-not-round";
    
    var actualName;
    if(props.name.length>20){
      actualName=props.name.slice(0,20) + "...";
    }else{
      actualName=props.name;
    }

    return(
        
        <div className="top-item-searched-class">

            <img src={props.image} id={roundImgOrNot} className="img-style-top-searched" />
            <h3>{actualName}</h3>
            <a href="#">{props.subname}</a>
            <div className="top-type-search-display"><span>{props.type}</span></div>
            <button><i className="fas fa-play"></i></button>

        </div>

    )
}
export default TopResultItem