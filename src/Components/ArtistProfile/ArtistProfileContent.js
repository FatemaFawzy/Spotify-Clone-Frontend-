import React, {Component} from "react";
import {Route , Switch, Redirect} from "react-router-dom";
import ArtistOverviewContent from "./ArtistOverviewContent";
import RelatedArtistsContent from "./RelatedArtistsContent";
import ArtistAboutContent from "./ArtistAboutContent";


class ArtistProfileContent extends Component {
  
  render ()
    {
      return (
    <div className="artist-profile-content">
            <Switch>

              

           
                <Route exact path="/webplayer/artistprofile/" render=  { (props) => <ArtistOverviewContent {...props}
                        id={this.props.artistID}
                        />}/>
                {/* <Route path="/webplayer/search/artistprofile/overview/" component={ArtistOverviewContent}/> */}
                <Route path="/webplayer/artistprofile/relatedartists/" render=  { (props) => <ArtistOverviewContent {...props}
                        id={this.props.artistID}
                        />}/>
                {/* <Route path="/webplayer/search/artistprofile/artistabout/" component={ArtistAboutContent}/> */}
                <Route path="/webplayer/artistprofile/artistabout/"  render=  { (props) => <ArtistAboutContent {...props}
                        bio={this.props.info.about}
                        genres={this.props.info.genres}/>}/>

            </Switch>

    </div>


)}
};

export default ArtistProfileContent;