import React ,{ Component} from 'react';
import "./AccountLayout.css";
import AccountSidebar from "../Components/AccountSidebar";
import AccountContent from "../Components/AccountContent";
import NavBar from "../Components/NavBar";
import Bottom from "../Components/Bottom";
import "../Components/AccountContent";
import {BrowserRouter as Router } from "react-router-dom";
// import { Container } from 'react-bootstrap/lib/Tab';

class AccountLayout extends Component {

    render()
    {
        return (
        <div>
            {/* Display the Navbar Component here */}
            <NavBar/>
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