import React from "react";

const InfoLine = (props) =>(

     <div className="acc-info">
        <p  className="info-tit">{props.title}</p>
        <p>{props.info}</p>
        <hr/>
    </div>


)

export default InfoLine