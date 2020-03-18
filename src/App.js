import React from 'react';
import './App.css';
import AccountLayout from "./Containers/AccountLayout";
import HomePage from "./Containers/HomePage";
import HelpPage from "./Components/HelpPage";
import SignUp from "./Containers/SignUp";
import {BrowserRouter as Router,
        Switch, 
        Route, 
       } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>

          <Route exact path="/" component={HomePage}/>
          <Route  path="/account/" component={AccountLayout}/>
          <Route  path="/help/" component={HelpPage}/>
          <Route  path="/signup/" component={SignUp}/>
          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
