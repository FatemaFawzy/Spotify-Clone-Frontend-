import React ,{ Component} from 'react';
import {Link } from "react-router-dom";
class HomePage extends Component {

    render()
    {
        return (
        <div>
            <Link to="/account/"> User Account</Link>
            <br/>
            <Link to="/signup/"> Sign up</Link>
            <br/>
            <Link to="/login/"> Log In</Link>
            <br/>
            <Link to="/help/"> Help</Link>
            <br/>
        </div>
        )
    }

}

export default HomePage