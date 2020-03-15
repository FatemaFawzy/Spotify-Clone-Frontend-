import React from "react";
import "./AccountContent.css";
import OverviewContent from "./OverviewContent.js";
import ProfileContent from "./ProfileContent.js";
import SetPasswordContent from "./SetPasswordContent.js";
import {Route , Switch, Redirect} from "react-router-dom";


const AccountContent= (props) => (


    <div className="account-content">
            <Switch>
                <Route path="/account/overview/" component={OverviewContent}/>
                <Route path="/account/profile/" component={ProfileContent}/>
                <Route path="/account/set-device-password/" component={SetPasswordContent}/>
                <Redirect to = "/account/overview/"/>

            </Switch>



    </div>



);



export default AccountContent;