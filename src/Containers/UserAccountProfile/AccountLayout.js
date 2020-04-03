import React ,{ Component} from 'react';
import "./AccountLayout.css";
import AccountSidebar from "../../Components/UserAccountProfile/AccountSidebar";
import AccountContent from "../../Components/UserAccountProfile/AccountContent";
import Bottom from "../../Components/WelcomeRelated/Bottom";
import "../../Components/UserAccountProfile/AccountContent";
import {BrowserRouter as Router } from "react-router-dom";
import MainNavbar from '../../Components/WelcomeRelated/MainNavbar';
// import { Container } from 'react-bootstrap/lib/Tab';

class AccountLayout extends Component {

    render()
    {
        return (
        <div>
            {/* Display the Navbar Component here */}
            <MainNavbar IsLoggedIn="true" position="relative" color="black"  />
            <div className="content-wrapper d-flex justify-content-center">

                    <div className="row no-gutters container-fluid">

                        <div className="col-sm-3">
                            <AccountSidebar image="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2617592195136976&height=300&width=300&ext=1586597311&hash=AeT69G6iOgUxz6VW"/>
                        </div>

                        <div className="col-sm-9">
                           < AccountContent/>
                        </div>   

                    </div>
            </div>
            {/* Display the page Footer Component here */}
            <Bottom/>
        </div>
        
        )
    }

}

export default AccountLayout