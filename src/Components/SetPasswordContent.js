import React from "react";
import './SetPasswordContent.css';

const SetPasswordContent=()=>(

<div className="SetPasswordContent">
   <div className="container" >
        <h1 className="header">Set device password</h1>
        <p>To use Spotify on your devices, you need to set a separate password and log in with the username provided.</p>
   </div>

   <div className="container" style={{paddingTop: "'30px", paddingBottom: "30px" ,paddingLeft: "19px",paddingRight: "19px", backgroundColor: "white"}}>
     <div id="UsernameAndButton" className="UsernameAndButton">
       <p>Your device username is: <strong>31zgyk3lu32eedylbcl7jc3qgr7y</strong></p> 
       <button id="SendEmailToSetPassword" type="submit" className="ButtonGreen btn btn-success">Send email to set password</button>
    </div>
     <div id="EmailSent" className="d-none">
         <p id="MessageAfterSend">An email featuring your device username and a link to set your password has been sent to alihalafawy99@gmail.com</p>
     </div>
   </div>

</div>

);


export default SetPasswordContent