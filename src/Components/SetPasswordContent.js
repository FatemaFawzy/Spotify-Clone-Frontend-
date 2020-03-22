import React from "react";
import './SetPasswordContent.css';

const SetPasswordContent=()=>(

<div class="SetPasswordContent">
   <div className="container" >
        <h1 className="header">Set device password</h1>
        <p>To use Spotify on your devices, you need to set a separate password and log in with the username provided.</p>
   </div>

  <div className="container" style={{paddingTop: "30px", paddingBottom: "30px" ,paddingLeft: "19px",paddingRight: "19px", backgroundColor: "white"}}>
  <form>
    
    <div className="form-group">
    <label for="exampleInputPassword1">Enter your current password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
   
    <div className="form-group">
    
    <label for="exampleInputPassword2">Enter your new password:</label>
    <input type="password" className="form-control" id="exampleInputPassword2"/>
   
    </div>

  <button type="submit" className="ButtonGreen btn btn-success">Submit</button>
 </form>
   
  </div>

</div>

);


export default SetPasswordContent