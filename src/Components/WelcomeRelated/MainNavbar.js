import React, { Component } from "react";
import './MainNavbar.css'
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actionTypes from "../../Store/actions";
import {BASEURL} from "../../Constants/baseURL";

/** Class MainNavbar 
 * @category MainNavbar
 * @extends Component
 */
export class MainNavbar extends Component {
  constructor(props){
    super(props); 
    this.state=
    {
    /** profile image
   * @memberof MainNavbar
   * @type {string}
   */
      image:"",
     
    }
  }

  /**Function that is called when the component renders
   * @memberof MainNavbar
   * @func componentDidMount
   */
  componentDidMount(){

    if(this.props.logging){

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
          this.setState({image:data.imagePath})
          console.log(data.imagePath);
        })
        .catch((error)=>{
          console.log(error);

        })




    }
  }
  
  render()
  {

    return(
<section className="nav-bar1" style={{position:this.props.position}}>

<nav className="navbar navbar-expand-md navbar-dark ground" style={{ background: this.props.color}} >
  
  <div className="container ">
        <Link to="/" className="navbar-brand logo-top" > <i className="fab fa-spotify"></i> Spotify </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto justify-content-end  ">
                  <li className="nav-item ">
                    <Link to="/ArtistAccount/ArtistWebPlayer/" className="nav-link">Artist Account</Link>
                  </li>
                  <li className="nav-item ">
                   <Link to="/webplayer" className="nav-link">Web Player</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/premium" className="nav-link  " > Premium </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/help" className="nav-link " > Help </Link>
                  </li>
                  <li className="nav-item hidden-sm">
                    <span className= "navbar-text pt-2 h3 font-weight-light mx-4"> | </span>
                  </li>

                  <ul id="profile" className={this.props.logging == true ? 'list-unstyled' : ' d-none'}>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/account" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <img className="user-img" alt=".." src={ BASEURL + "Images/" +this.state.image} /> */}
                        <img className="user-img" alt=".." src={ BASEURL + "Images/" +this.state.image} />
                         Profile
                        </a>
                    
                        <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbar-dropdown">
                        <a className="dropdown-item drop-class" href="/account">Account</a>
                        <a onClick={this.props.onSignOut} className="dropdown-item drop-class" href="/">Sign out</a>
                        </div>
    
                    </li>
                  </ul>

                  <ul  className={this.props.logging == true ? 'd-none' : 'list-unstyled'}>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link " > Sign up </Link>
                    </li>
                  </ul>
                  <ul className={this.props.logging == true ? 'd-none' : 'list-unstyled'}>
                    <li className="nav-item">
                        <Link to="/logIn" className="nav-link " > Log in </Link>
                    </li>
                  </ul>
          </ul>
        </div>
    </div>    
</nav>
</section>
    )
}
}

/** A function connecting component to redux store
 * @memberof MainNavbar
 * @param {*} state 
 */
const mapStateToProps = state =>{
  return{
    logging: state.loggenIn,
    userToken: state.userToken

  };
};


/** A function connecting component to redux store
 * @memberof MainNavbar
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {
  return {
    onSignOut : () => dispatch ({type: actionTypes.ON_SIGNOUT}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);