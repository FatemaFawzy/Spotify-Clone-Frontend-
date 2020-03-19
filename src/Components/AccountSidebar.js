import React from "react";
import "./AccountSidebar.css";

import {NavLink} from "react-router-dom";



const AccountSidebar = (props) => (

    <div className="account-sidebar">

        <img 
        className="user-img" 
        alt="Profile" 
        src={props.image}
        />

        <div className="side-items">

        {/* overview link*/}
        <NavLink to="/account/overview/" >
            <i className="fas fa-home"> &ensp; Account overview</i>
        </NavLink>         

        {/* profile link*/}
        <NavLink to="/account/profile/" >
            <i className="fas fa-pencil-alt">  &ensp; Edit profile</i>
        </NavLink>

        {/* set device password link*/}
        <NavLink to="/account/set-device-password/" >
            <i className="fas fa-lock"> &ensp; Set device password </i>
        </NavLink>

        {/* Recover playlists*/}
        <NavLink to="/account/recover-playlists" >
             <i className="fas fa-redo"> &ensp; Recover playlists </i>
        </NavLink>
           
        </div>

    </div>
);

export default AccountSidebar;