import React from 'react';
import './App.css';
import AccountLayout from "./Containers/AccountLayout";
import HelpPage from "./Components/HelpPage";
import welcomePage from "./welcomePage";
import SignUp from "./Containers/SignUp";
import login from "./Containers/login";
import Premium from "./Containers/Premium";
import ForgotPassword from "./Components/ForgotPassword";
import HomePageSidebar from "./Components/HomePageSidebar";
import Success from "./Components/Success";
import {BrowserRouter as Router,
        Switch, 
        Route, 
       } from "react-router-dom";


       
function App() {
  return (
    <div className="App">

      <Router>

        <Switch>

          
          <Route exact path="/" component={welcomePage}/>
          <Route  path="/account/" component={AccountLayout}/>
          <Route  path="/help/" component={HelpPage}/>
          <Route  path="/signup/" component={SignUp}/>
          <Route  path="/premium/" component={Premium}/>
          <Route  exact path="/logIn/" component={login}/>
          <Route  exact path="/logIn/forgotpassword/" component={ForgotPassword}/>
          <Route path="/logIn/forgotpassword/success/" component={Success}/>
          
          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
