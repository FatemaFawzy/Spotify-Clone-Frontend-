import React, { Component } from 'react';
import './DropDownMenu.css';
import { BrowserRouter, withRouter } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import {BASEURL} from "../../Constants/baseURL";
import emptyprofilepic from "../../assets/emptyprofilepic.jpg";

class DropDownMenu extends Component {
  state = {
    username: "",
    userimage: "",

  }
  componentDidMount() {
    //make a request with the this.props.userID to get the name and pic of the user

    const url = BASEURL +"users/me";
    const requestOptions = {
      method: 'GET',
      headers: { 'x-auth': this.props.userToken },
    };
      fetch(url,requestOptions)
        .then((response) => {
          return response.json();
          
        })
        .then((data) => {
          if (data.userName > 15) {
            this.setState({ username: data.userName.slice(0, 15) + "..." });
          }
          else {
            this.setState({ username: data.userName });
          }
          this.setState({ userimage: data.imagePath });
        })
        .catch((error)=>{
          console.log(error);

        })


  }
  render() {
    return (
      <div className="drop-down-menu">
        <div className="over btn-group mr-4 " id="right-drop-down"  >
          <button type="button" className="btn dropdown-toggle account-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="image" src={BASEURL+"Images/"+(this.state.userimage)} alt=".." />
            <p className="name">{this.state.username}</p>
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

const mapStateToProps = state => {

  return {
    userID: state.userID,
    userToken: state.userToken
  };

};

export default connect(mapStateToProps)(DropDownMenu);