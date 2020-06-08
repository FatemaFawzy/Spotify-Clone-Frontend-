import React from "react";
import "./App.css";
import AccountLayout from "./Containers/UserAccountProfile/AccountLayout";
import HelpPage from "./Components/HelpPage/HelpPage";
import welcomePage from "./Containers/WelcomePage/welcomePage";
import SignUp from "./Containers/SignUp/SignUp";
import Login from "./Containers/Login/Login"
import loginFacebook from "./Containers/Login/LoginFacebook";
import Premium from "./Containers/PremiumBenefits/Premium";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Success from "./Components/ForgotPassword/Success";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebPlayer from "./Containers/WebPlayer/WebPlayer";
import ArtistProfile from "./Containers/ArtistProfile/ArtistProfile";
import EmailSent from "./Containers/SignUp/EmailSent";
import CreateNewPassword from "./Components/ForgotPassword/CreateNewPassword";
import PasswordIsNew from "./Components/ForgotPassword/PasswordIsNew";
import ScrollToTop from "./Containers/GenericComponenets/ScrollToTop";
import ArtistWebPlayer from "./Containers/ArtistAccount/ArtistWebPlayer";
import ArtistSideBar from "./Containers/ArtistAccount/ArtistSideBar";
// import NotificationHistory from "./Components/NotificationHistory"
import NotificationHistory from "./Components/NotificationHistory/NotificationHistory"
function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop>

        <Switch>


          <Route exact path="/" component={welcomePage}/>
          <Route  path="/account/" component={AccountLayout}/>
          <Route  path="/help/" component={HelpPage}/>
          <Route  exact path="/signup/" component={SignUp}/>
          <Route  path="/premium/" component={Premium}/>
          <Route  path="/webplayer/" component={WebPlayer}/>
          <Route  exact path="/logIn/" component={Login}/>
          <Route  exact path="/loginFacebook/" component={loginFacebook}/>
          <Route  exact path="/logIn/forgotpassword/" component={ForgotPassword}/>
          <Route path="/logIn/forgotpassword/success/" component={Success}/>
          <Route path="/signup/emailsent/" component={EmailSent}/>
          <Route exact path="/logIn/forgotpassword/newpassword/" component={CreateNewPassword}/>
          <Route path="/logIn/forgotpassword/newpassword/passwordisnew/" component={PasswordIsNew}/>
          <Route path="/ArtistAccount/ArtistWebPlayer/" component={ArtistWebPlayer}/>
          <Route  path="/webplayer/NotificationHistory" Component={NotificationHistory}/>

          {/* TODO: Change the route of artistprofile when search is implemented */}
          <Route  path="/webplayer/likedsongs/" component={ArtistProfile}/>
          
          
          {/* TODO: add routes to the other pages */}
        </Switch>

      </ScrollToTop>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={welcomePage} />
            <Route path="/account/" component={AccountLayout} />
            <Route path="/help/" component={HelpPage} />
            <Route exact path="/signup/" component={SignUp} />
            <Route path="/premium/" component={Premium} />
            <Route path="/webplayer/" component={WebPlayer} />
            <Route exact path="/logIn/" component={Login} />
            <Route exact path="/loginFacebook/" component={loginFacebook} />
            <Route
              exact
              path="/logIn/forgotpassword/"
              component={ForgotPassword}
            />
            <Route path="/logIn/forgotpassword/success/" component={Success} />
            <Route path="/signup/emailsent/" component={EmailSent} />
            <Route
              exact
              path="/logIn/forgotpassword/newpassword/"
              component={CreateNewPassword}
            />
            <Route
              path="/logIn/forgotpassword/newpassword/passwordisnew/"
              component={PasswordIsNew}
            />

            {/* TODO: Change the route of artistprofile when search is implemented */}
            <Route path="/webplayer/likedsongs/" component={ArtistProfile} />

            {/* TODO: add routes to the other pages */}

            <Route  path="/webplayer/NotificationHistory" Component={NotificationHistory}/>

          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
