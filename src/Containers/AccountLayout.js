import React ,{ Component} from 'react';
import "./AccountLayout.css";
import AccountSidebar from "../Components/AccountSidebar";
import AccountContent from "../Components/AccountContent";
import "../Components/AccountContent";
import {BrowserRouter as Router } from "react-router-dom";


class AccountLayout extends Component {

    render()
    {
        return (
        <div>


            {/* Display the Navbar Component here */}
            <h1>Navbar</h1>

            <Router>
            <div className="content-wrapper">

                    <div className="row no-gutters ">
                        <div className="col-sm-3 hidden-xs">

                            <AccountSidebar image="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2617592195136976&height=300&width=300&ext=1586597311&hash=AeT69G6iOgUxz6VW"/>


                        </div>

                        

                        <div className="col-sm-9">
                           < AccountContent/>

                        </div>

                        
                    </div>
            </div>
 
            </Router>

            {/* Display the page Footer Component here */}
            <h1>Footer</h1>



        </div>
        )
    }

}

export default AccountLayout