import React from "react";
import "./OverviewContent.css"
import {Link} from "react-router-dom"
import InfoLine from "./InfoLine"

const currentuser={
    "User":
        {
      "id" : "0OdUWJ0sBjDrqHygGUXeCF",
      "email": "abc@gmail.com",
      "totalfollowers" : 306565,
      "isactive": true,
      "ispremium":false,
        },
    
    "username" : "Jadams",
    "fname" : "John",
    "lname" : "Adams"
    }

const OverviewContent=()=>(

<div className="ac-ov">
        <h1><strong>Account overview</strong></h1>
        <h3 style={{marginTop:"5%"}}><strong>Profile</strong></h3>
        <InfoLine title="Country" info="EG"/>
        <InfoLine title="Email" info={currentuser.User.email}/>
        <InfoLine title="Username" info={currentuser.username}/>
        <InfoLine title="First Name" info={currentuser.fname}/>
        <InfoLine title="Last Name" info={currentuser.lname}/>
 
        <Link to="/account/profile" className="ep-bt">EDIT PROFILE</Link>

        <h3 style={{marginTop:"5%"}}><strong>Your plan</strong></h3>

        <div className= "sf-bx">       
            <p className="sf">Spotify Free</p> 
        </div>

        <div className= "shm-bx">       
            <p>Play music in shuffle mode only, with ads.</p>
            
            <hr/>
            
            <h4><strong>Free</strong></h4>
        </div>

        <Link className="ep-bt">JOIN PREMIUM</Link>


        <h4><strong>Sign out everywhere</strong></h4>
        <br/>
        <p>Sign out wherever you have Spotify open, including the web, mobile, desktop or any other devices.</p>

        <p className="accnote">Note: This doesn’t include partner devices, such as Sonos and PlayStation. For more information about logging out (or unlinking) Spotify from a partner device, check the device’s manufacturer guide.</p>
        
        <Link className="ep-bt">SIGN OUT EVERYWHERE</Link>
</div>

);


export default OverviewContent