import React from "react";
import './SetPasswordContent.css';

const SetPasswordContent=()=>(

<div class="SetPasswordContent">
    
  <div className="container" >
    <h1 className="header">Set device password</h1>
    <p>To use Spotify on your devices, you need to set a separate password and log in with the username provided.</p>
  </div>

  <div className="container" id="container2">
    <form>

      <div className="form-group">
        <label for="password-input1">Enter your current password:</label>
        <input type="password" className="form-control" id="password-input1"/>
      </div>

      <div className="form-group">
        <label for="password-input2">Enter your new password:</label>
        <input type="password" className="form-control" id="password-input2"/>
      </div>

      <button type="submit" className="button-green btn btn-success">Submit</button>

    </form>
  </div>

</div>

);


export default SetPasswordContent;