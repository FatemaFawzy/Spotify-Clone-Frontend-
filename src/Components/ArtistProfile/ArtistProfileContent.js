import React, {Component} from "react";
import {Route , Switch, Redirect} from "react-router-dom";
import ArtistOverviewContent from "./ArtistOverviewContent";
import RelatedArtistsContent from "./RelatedArtistsContent";
import ArtistAboutContent from "./ArtistAboutContent";
import {withRouter} from "react-router-dom";


class ArtistProfileContent extends Component {
  
  render ()
    {
      return (
    <div className="artist-profile-content">
            <Switch>
           
                <Route path={this.props.match.url + "/overview/"} render=  { (props) => <ArtistOverviewContent {...props}
                        id={this.props.artistID}
                        />}/>
                {/* <Route path="/webplayer/search/artistprofile/overview/" component={ArtistOverviewContent}/> */}
                <Route path= {this.props.match.url +"/relatedartists/"} render=  { (props) => <RelatedArtistsContent {...props}
                        id={this.props.artistID}
                        />}/>
                {/* <Route path="/webplayer/search/artistprofile/artistabout/" component={ArtistAboutContent}/> */}
                <Route path= {this.props.match.url +"/artistabout/"}  render=  { (props) => <ArtistAboutContent {...props}
                        bio={this.props.info.about}
                        genres={this.props.info.genres}/>}/>

                <Redirect to= {this.props.match.url +"/overview/"} />

            </Switch>

    </div>


)}
};

export default withRouter(ArtistProfileContent);