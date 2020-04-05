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

class AccountLayout extends Component {

  state={

    userInfo: {},
  }

  componentDidMount(){

    const url = "https://jsonplaceholder.typicode.com/photos/1"; 
      fetch(url)
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
                            <AccountSidebar image={this.state.userInfo.url}/>
                        </div>

                        <div className="col-sm-9">
                           < AccountContent info={this.state.userInfo}/>
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
    //now you have access to the userID as this.props.userID inside the class component.
  };

};

export default connect(mapStateToProps)(AccountLayout)