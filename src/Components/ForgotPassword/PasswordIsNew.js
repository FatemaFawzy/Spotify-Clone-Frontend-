import React, { Component } from 'react';
import './PasswordIsNew.css';
import Header from '../WelcomeRelated/Header';
import Footer from '../WelcomeRelated/Footer';

/** Class PasswordIsNew to indicate that the new password has been successfully reset
 * @category ForgotPassword
 * @extends Component
 */
export class PasswordIsNew extends Component {
render(){
return (
  <div className="password-is-new">
    <Header />
    <div className="container">
      <h1 className="text-center"><strong>Password Reset</strong></h1>
      <p className="text-center" style={{fontWeight:"500"}} id="paragraph">Your password has been successfully reset.</p>
    </div>
    <Footer />
  </div>
);
}
}
export default PasswordIsNew;