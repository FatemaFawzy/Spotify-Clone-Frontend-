import React, { Component } from 'react';
import './Success.css';
import Header from '../WelcomeRelated/Header';
import Footer from '../WelcomeRelated/Footer';

/** Class Success to indicate that an email has been sent with instructions on resetting the password.
 * @category ForgotPassword
 * @extends Component
 */
export class Success extends Component {
render(){
return (
  <div className="Success">
    <Header />
    <div className="container">
      <h1 className="text-center"><strong>Password Reset</strong></h1>
      <p className="text-center" style={{fontWeight:"500"}} id="paragraph">A message has been sent to you by email with a link to reset your current password.</p>
    </div>
    <Footer />
  </div>
);
}
}
export default Success;