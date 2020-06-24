import React, { Component } from "react";
import "./HelpPage.css";
import Carousel from 'react-bootstrap/Carousel';
import whitebackground from "@/assets/whitebackground.jpg";
import MainNavbar from '../WelcomeRelated/MainNavbar';
import Bottom from "../WelcomeRelated/Bottom";
import { Link } from "react-router-dom";

 /**Elements 
   * @memberof HelpPage
   * @type {Array<object>}
   */
var elements;
 /**Check visible
   * @memberof HelpPage
   * @type {boolean}
   */
var checkvisible;

/** Class HelpPage 
 * @category HelpPage
 * @extends Component
 */
class HelpPage extends Component {

    /**A function to show the popping area for creating a new playlist
   * @memberof HelpPage
   * @func handelindexchange
   * @param event
   */
  handelindexchange = (event) => {
    checkvisible = document.querySelectorAll(".slide-cars-title");
    var j;
    for (var i = 0; i < checkvisible.length; i++) {
      if (checkvisible[i].offsetWidth > 0 && checkvisible[i].offsetHeight > 0)
        j = i;
    }
    elements = document.querySelectorAll(".slide");
    for (var i = 0; i < elements.length; i++) {
      if (i == j) {
        elements[i].className = "slide active";
      }

      else {
        if (elements[i].className == "slide active")
          elements[i].className = "slide";
      }
    }
  }

  render() {
    return (
      <div className="help-class">
        <div className="helpNav" > 
        <MainNavbar color="black" position="relative" IsLoggedIn="false" />
        </div>
        {/* First block */}
        <div className="help-header">
          <div className="container">

            <h1>How can we help you?</h1>
            {/* <input type="text" className="search-help-field" id="" aria-describedby="helpId" placeholder="Search"></input> */}

            <div className="row">

              <div className="col-5 col-md-3 side-text-help">
                <p>ACCOUNT HELP</p>
                <h5>Finding accounts</h5>
              </div>
            </div>
          </div>

        </div>

        {/* Second block */}

        <div className="front-nav">
          <div className="container">

            <div className="row">

              <div className="col-12 col-md-4 front-nav-item">
                <h4>Account & Payment</h4>

                <p>Account Help</p>
                <p>Payment Help</p>
                <p>Subscription Options</p>
                <p>Privacy & Security</p>

                {/* drop down  should be added here*/}
              </div>

              <div className="col-12 col-md-4 front-nav-item">
                <h4>Using Spotify</h4>


                <p>Video tutorials</p>
                <p>Getting started</p>
                <p>Playlists</p>
                <p>Features</p>
                <p>System & settings</p>

                {/* drop down  should be added here*/}
              </div>

              <div className="col-12 col-md-4 front-nav-item">
                <h4>Listen Everywhere</h4>
                <p>Speakers</p>
                <p>TVs</p>
                <p>Cars</p>
                <p>Gaming</p>
                <p>Smart Watches</p>

                {/* drop down  should be added here*/}
              </div>

            </div>
          </div>

        </div>

        {/* Third block */}
        <div className="visit-com-help">
          <div className="container">
            <h1>Visit the Community</h1>
            <p>Have questions? Find answers from our worldwide Community of expert fans!</p>
            <h5>1960 members online right now.</h5>
            {/* <Link className="get-spotify-bt" to="/signup/">FIND ANSWERS</Link> */}
          </div>
        </div>

        {/* Fourth block */}
        <div className="features-how-use">
          <div className="container">
            <h1>How to use the features</h1>
            <div className="row">
              <div className="col-12 col-md-6" >
                <p>GET STARTED</p>
                <hr />
                <h3>Search</h3>
                <h3>Playlists</h3>
                <h3>Listen Offline</h3>
              </div>
              <div className="col-12 col-md-6">
                <p>AND CHECK THESE OUT</p>
                <hr />
                <h3>Radio</h3>
                <h3>Discover Weekly</h3>
                <h3>Spotify on Chromecast</h3>
                <h3>Share</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth block */}
        <div className="carousel-exist">
          <div className="container">
            <div className="row">
              <div className="col-md-6 hidden-xs hidden-sm carousel-iphones">
                <div className="iphone-device">
                  <div className="iphone-screen">
                    <img src="https://support.scdn.co/static/img/videos/video-offline.jpg" className="slide active" />
                    <img src="https://support.scdn.co/static/img/videos/video-connect.jpg" className="slide" />
                    <img src="https://support.scdn.co/static/img/videos/video-chromecast.jpg" className="slide" />
                    <img src="https://support.scdn.co/static/img/videos/video-playlist.jpg" className="slide" />
                    <img src="https://support.scdn.co/static/img/videos/video-search.jpg" className="slide" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 video-info-container">

                <Carousel controls={true} indicators={true} onSlideEnd={(event) => this.handelindexchange(event)}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={whitebackground}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3 className="slide-cars-title">Listen Offline</h3>
                      <p>How to take your music with you in the car, on the plane, or wherever you may not be able to access the internet</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={whitebackground}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3 className="slide-cars-title">Spotify Connect</h3>
                      <p>Play Spotify on your speaker, sound system, or TV with Spotify Connect. Here's how!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={whitebackground}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3 className="slide-cars-title">Spotify on Chromecast</h3>
                      <p>Spotify on your Chromecast? You heard us right! Here's how to team them up!</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={whitebackground}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3 className="slide-cars-title">Make a Playlist</h3>
                      <p>Playlists are your personal mixtapes that you can share or collaborate on with friends. Here's how to get started.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={whitebackground}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3 className="slide-cars-title">Search</h3>
                      <p>Search is the key to Spotify's vast library of music, whether you're looking for a particular artist, album, or song; or if you want Spotify to find music to match a mood, activity, or time of day.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

              </div>

            </div>
          </div>
        </div>

        {/* Sixth block */}
        <div className="get-spotify-sugg">
          <div className="container">
            <h1>Still not on Spotify?</h1>
            <div className="row justify-content-center">

              <div className="col-12 col-md-6">

                <p>Over 30 million tracks; thousands of curated playlists; Discover Weekly; Spotify Running; Radio; Chromecast, sound system, car, TV, and PlayStation integration; sharing and creating playlists with your friends... All of this is ready for you.</p>
              </div>
            </div>
            <Link className="get-spotify-bt" to="/signup/">GET SPOTIFY</Link>
          </div>
        </div>

        <Bottom />
      </div>
    );
  }
}

export default HelpPage