import React ,{ Component} from 'react';
import './Premium.css';
import MainNavbar from "../../Components/WelcomeRelated/MainNavbar";
import Footer from "../../Components/WelcomeRelated/Footer";
import {Link, Router } from "react-router-dom";

class Premium extends Component {
render() {
return ( 
  <div className="premium">
    <MainNavbar color="rgba(0, 0, 0, 0.5)" />
    <div className="jumbotron" id="top-section">
      <h1 id="get-premium">Get Premium free for 1 month</h1>
      <h2 id="price">Just EGP 49.99/month after. Cancel anytime.</h2>
      <Link to="/signup" className="btn btn-success button"><span id="ovflow">Get Premium</span></Link>
      <p className="pt-4" id="terms"><span className="underline">Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium.</p>
    </div>

    <h1 id="question" className=" mt-4 pt-5 mb-3 pb-5">Why go Premium?</h1>

    <div className="container">
      <div className="row justify-content-around">
        <div className="col-xl-2 col-md-6 col-12 pb-md-5 mb-5 mb-md-0">
          <div className="row d-flex">
            <div className=" col-4 col-xl-12">
              <img className="card-img-top pb-lg-5" src="https://campaigns.scdn.co/images/benefit-1.png" alt=""/>
            </div>
            <div className="col-8 col-xl-12 remove-pad">
              <h1 className="card-title">Daily top picks.</h1>
              <p className="card-text">Listen anywhere.</p>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-md-6 col-12 pb-md-5 mb-5 mb-md-0">
          <div className="row">
            <div className=" col-4 col-xl-12">
              <img className="card-img-top pb-lg-5" src="https://campaigns.scdn.co/images/benefit-2.png" alt=""/>
            </div>
            <div className="col-8 col-xl-12 remove-pad">
              <h1 className="card-title">No ad interruptions.</h1>
              <p className="card-text">Enjoy nonstop music.</p>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-md-6 col-12 pb-md-5 mb-5 mb-md-0">
          <div className="row">
            <div className=" col-4 col-xl-12">
              <img className="card-img-top pb-lg-5" src="https://campaigns.scdn.co/images/benefit-3.png" alt=""/>
            </div>
            <div className="col-8 col-xl-12 remove-pad">
              <h1 className="card-title">Get new releases.</h1>
              <p className="card-text">Two weeks early.</p>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-md-6 col-12 pb-md-5 mb-5 mb-md-0">
          <div className="row">
            <div className=" col-4 col-xl-12">
              <img className="card-img-top pb-lg-5" src="https://campaigns.scdn.co/images/benefit-4.png" alt=""/>
            </div>
            <div className="col-8 col-xl-12 remove-pad">
              <h1 className="card-title">Unlimited skips.</h1>
              <p className="card-text">Just hit next.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=" d-flex justify-content-center">
      <div className="card end-card px-4">
        <h3 className="pt-4">Spotify Premium</h3>
        <p id="month"><span id="bold"> EGP 49.99</span> / month</p>
        <p className="border-bottom1 small">1 month free</p>
        <p className="padTop"><i className="fas fa-check"></i><span className="pl-2">Unlimited skips</span></p>
        <p><i className="fas fa-check"></i><span className="pl-2">No ad interruptions</span></p>
        <p><i className="fas fa-check"></i><span className="pl-2">Reach new releases first</span></p>
        <p className="border-bottom2"><i className="fas fa-check"></i><span className="pl-2">View daily top picks</span></p>
        <Link to="/signup" className="btn btn-success bigger" >GET PREMIUM</Link>
      </div>
    </div>

    <p className="text-center pt-5" id="last">Terms and conditions apply.</p>

    <Footer />
  </div>
);
}
}
export default Premium;