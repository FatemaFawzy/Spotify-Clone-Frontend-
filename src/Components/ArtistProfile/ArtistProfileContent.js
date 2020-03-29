import React from "react";
import {Route , Switch, Redirect} from "react-router-dom";
import ArtistOverviewContent from "./ArtistOverviewContent";
import RelatedArtistsContent from "./RelatedArtistsContent";
import ArtistAboutContent from "./ArtistAboutContent";


const ArtistProfileContent= (props) => (


    <div className="artist-profile-content">
            <Switch>
                <Route exact path="/webplayer/likedsongs/" component={ArtistOverviewContent}/>
                {/* <Route path="/webplayer/search/artistprofile/overview/" component={ArtistOverviewContent}/> */}
                <Route path="/webplayer/likedsongs/relatedartists/" component={RelatedArtistsContent}/>
                {/* <Route path="/webplayer/search/artistprofile/artistabout/" component={ArtistAboutContent}/> */}
                <Route path="/webplayer/likedsongs/artistabout/" component={ArtistAboutContent}/>

            </Switch>

    </div>



);

export default ArtistProfileContent;