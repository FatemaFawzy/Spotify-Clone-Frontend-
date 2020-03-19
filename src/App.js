import React from 'react';
import './App.css';
import AccountLayout from "./Containers/AccountLayout";
// import HomePage from "./Containers/HomePage";
import HelpPage from "./Components/HelpPage";
import welcomePage from "./welcomePage";
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
          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
