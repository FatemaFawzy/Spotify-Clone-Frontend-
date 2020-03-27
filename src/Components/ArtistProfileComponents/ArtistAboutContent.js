import React, { Component } from 'react';
import "./ArtistAboutContent.css"

class ArtistAboutContent extends Component {

  constructor(props){
    super(props);

    this.state = {

      biography: "A British singer/songwriter with a keen sense for both atmosphere and melody, Tom Odell's piano-led odes to heartache" + 
      "and pain are emotional, raw, and often hushed affairs that invoke names like Leonard Cohen and Jeff Buckley. His acclaimed" + 
      "2012 debut EP earned him a BRITs Critics' Choice award, and his first full-length outing, 2013's Long Way Down, reached" +
      "number one on the U.K. albums chart. Uneasy with the idea of fame, Odell recorded his next two releases in New York and" + 
      "Los Angeles before returning home to London for 2018's intimate Jubilee Road.",
      musicgenres: ["Pop", "Indie Rock", "Jazz"],


    }
  }

  render(){
    return (
      <div className="artist-about-content container-fluid">
        <div className="row">

          <div className="col-8 p-0">
            <section className="mr-5">
              <h2 className="title"> Biography </h2>
              <p className="font-weight-bolder paragraphs"> {this.state.biography} </p>
            </section>
          </div>

          <div className="col-4 p-0">
            <section className="pl-4 pr-4">
              <h2 className="title"> Associated Music Genres </h2>
              <div className="font-weight-bolder paragraphs">
                <p> {this.state.musicgenres[0]} </p>
                <p> {this.state.musicgenres[1]} </p>
                <p> {this.state.musicgenres[2]} </p>
              </div>
            </section>
          </div>

        </div>
      </div>
    );
  }
}
export default ArtistAboutContent;