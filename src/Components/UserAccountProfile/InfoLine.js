import React from "react";

 /**A function Component that holds a line of the user info that appears in the account overview
   * @func InfoLine
   */

const InfoLine = (props) =>(

     <div className="acc-info">
        <p  className="info-tit">{props.title}</p>
        <p>{props.info}</p>
        <hr/>
    </div>

)

export default InfoLine