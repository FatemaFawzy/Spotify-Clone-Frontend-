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
            <i className="fas fa-home">      Account overview</i>
        </NavLink>         

        {/* profile link*/}
        <NavLink to="/account/profile/" >
            <i className="fas fa-pencil-alt">      Edit profile</i>
        </NavLink>

        {/* set device password link*/}
        <NavLink to="/account/set-device-password/" >
            <i className="fas fa-lock">      Set device password </i>
        </NavLink>
           
        </div>

    </div>
);

export default AccountSidebar;