import React, { Component } from 'react';
import './DropDownMenu.css';
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

class DropDownMenu extends Component {
render(){
return (
  <div className="drop-down-menu">
      <div className="over btn-group mr-4 " id="right-drop-down"  >
            <button type="button" className="btn dropdown-toggle account-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img  className="image" src={this.props.image} alt="User"/>
              <p className="name">{this.props.name}</p>
            </button>
            <div className="over dropdown-menu dropdown-menu-right">
            <BrowserRouter forceRefresh={true}><Link to="/account" className="over dropdown-item"><button className="dropdown-item white-words pl-4" type="button">Account</button></Link>   </BrowserRouter>
            <BrowserRouter forceRefresh={true}><Link to="/" className="over dropdown-item"><button className="dropdown-item white-words border-on-top" type="button">Log Out</button></Link>   </BrowserRouter>
            </div>
          </div>
  </div>
);
}
}
export default DropDownMenu;