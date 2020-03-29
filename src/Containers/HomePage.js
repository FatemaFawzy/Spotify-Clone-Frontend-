import React,{Component} from 'react';
import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";
 import './HomePage.css';
import HomePageNavbar from "../Components/HomePageNavbar";


class HomePage extends Component {

  render(){

    return (
      <div className ="home-navbar">
        <Router>
        <Switch>
        
            <HomePageNavbar image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
          
          </Switch>
          </Router>

      </div>
      
    );


  }
  
}

export default HomePage;

