import React, { Component } from 'react';
import './EmailSent.css';
import Header from '../../Components/WelcomeRelated/Header';
import Footer from '../../Components/WelcomeRelated/Footer';

/** Class EmailSent 
 * @category EmailSent
 * @extends Component
 */
class EmailSent extends Component {
render(){
return (
  <div className="email-sent">
    <Header />
    <div className="container ">
      <h1 className="text-center m-5"><strong>Confirmation Email Sent!</strong></h1>
      <p className="text-center" style={{fontWeight:"500"}} id="paragraph">A link has been sent to your email to activate your account.</p>
    </div>
    <Footer />
  </div>
);
}
}
export default EmailSent;