import React from "react";
import "./AccountContent.css";
import OverviewContent from "./Overview/OverviewContent.js";
import SetPasswordContent from "./SetPassword/SetPasswordContent.js";
import RecoverPlaylists from "./RecoverPlaylists/RecoverPlaylists";
import {Route , Switch, Redirect} from "react-router-dom";
import EditProfile from "./EditProfile/EditProfile.js";
import UserFollowersFollowing from "./FollowersFollowing/UserFollowersFollowing";

 /**A function Component that switches the routes between different Components of the user account page
   * @func AccountContent
   */
const AccountContent= ({info,token}) => (


    <div className="account-content">
            <Switch>

                <Route path="/account/overview/" render=  { (props) => <OverviewContent {...props}
                        passedInfo={info}/>}/>
                <Route path="/account/profile/" render=  { (props) => <EditProfile {...props}
                        passedInfo={info}/>}/>
                <Route path="/account/set-device-password/" render=  { (props) => <SetPasswordContent {...props}
                        passedToken={token}/>}/>
                <Route path="/account/userfollowersfollowing/" render=  { (props) => <UserFollowersFollowing {...props}
                        passedToken={token}/>}/>
                {/* <Route path="/account/recover-playlists/" component={RecoverPlaylists}/> */}

                <Redirect to = "/account/overview/"/>

            </Switch>

    </div>



);

export default AccountContent;