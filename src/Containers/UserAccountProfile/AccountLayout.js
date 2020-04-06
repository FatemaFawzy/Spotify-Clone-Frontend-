import React ,{ Component} from 'react';
import "./AccountLayout.css";
import AccountSidebar from "../../Components/UserAccountProfile/AccountSidebar";
import AccountContent from "../../Components/UserAccountProfile/AccountContent";
import Bottom from "../../Components/WelcomeRelated/Bottom";
import "../../Components/UserAccountProfile/AccountContent";
import {BrowserRouter as Router } from "react-router-dom";
import MainNavbar from '../../Components/WelcomeRelated/MainNavbar';
// import { Container } from 'react-bootstrap/lib/Tab';
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";

class AccountLayout extends Component {

  state={

    userInfo: {
      "_id": "5e8a4e476ee6170338bf1a9b",
      "userName": "ranime",
      "email": "ranimemohamed8@gmail.com",
      "password": "$2b$10$tZ9A05CzdvX9AodV6Q/aZOt/8bIIJT78rN3Ax1txwfkY8MJujc4ZK",
      "gender": "F",
      "birthDate": "1999-05-30T00:00:00.000Z",
      "__v": 0,
      "likedAlbums": [],
      "likedTracks": [],
      "imagePath": "defaultuser.png",
      "isActive": true,
      "isPremium": false
  },
  }

  componentDidMount(){

    const url = BASEURL;
    const requestOptions = {
      method: 'GET',
      headers: { 'x-auth': 'eyJhbGciOiJIUzI1NiJ9.QXV0aG9yaXphdGlvbmZvcmZyb250ZW5k.xEs1jjiOlwnDr4BbIvnqdphOmQTpkuUlTgJbAtQM68s' },
    };
      fetch(url,requestOptions)
        .then((response) => {
          return response.json();
          
        })
        .then((data) => {
          this.setState({userInfo:data})
        })
        .catch((error)=>{
          console.log(error);

        })

  }

    render()
    {
        return (
        <div>
            {/* Display the Navbar Component here */}
            <MainNavbar IsLoggedIn="true" position="relative" color="black"  />
            <div className="content-wrapper d-flex justify-content-center">

                    <div className="row no-gutters container-fluid">

                        <div className="col-sm-3">
                            <AccountSidebar image={this.state.userInfo.imagePath}/>
                        </div>

                        <div className="col-sm-9">
                           < AccountContent info={this.state.userInfo} token={this.props.userToken}/>
                        </div>   

                    </div>
            </div>
            {/* Display the page Footer Component here */}
            <Bottom/>
        </div>
        
        )
    }

}

const mapStateToProps = state => {

  return {
    userID : state.userID,
    userToken : state.userToken
    //now you have access to the userID as this.props.userID inside the class component.
    //now you have access to the userToken as this.props.userToken inside the class component.
  };

};

export default connect(mapStateToProps)(AccountLayout)