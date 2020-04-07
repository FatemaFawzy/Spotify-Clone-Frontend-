import React from "react"
import  "./TopResultItem.css"
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actionTypes from "../../Store/actions";
import * as itemType from "../../Constants/itemType";



const TopResultItem =(props) =>{

    const roundImgOrNot= props.type===itemType.ARTIST?"i-am-top-and-round-img":"i-am-top-and-not-round";
    
    var actualName;
    if(props.name.length>20){
      actualName=props.name.slice(0,20) + "...";
    }else{
      actualName=props.name;
    }

    return(
        
        <div onClick={ () => {

          switch (props.type) {
            case itemType.SONG:
        
              props.history.push("/webplayer/album/");
              props.onSongClicked(props.id);
        
              break;
        
            case itemType.ARTIST:
        
              props.history.push("/webplayer/artistprofile/");
              props.onArtistClicked(props.id);
        
              break;
        
            case itemType.ALBUM:
        
              props.history.push("/webplayer/album/");
              props.onAlbumClicked(props.id);
        
              break;
        
            case itemType.PLAYLIST:
        
              props.history.push("/webplayer/playlist/");
              props.onPlaylistClicked(props.id);
        
              break;
        
            case itemType.PROFILE:
        
              props.history.push("/webplayer/user/");
              props.onProfileClicked(props.id);
        
              break;
        
            default:
        
              props.history.push("/webplayer/");
        
              break;
          }
        
        
        }} className="top-item-searched-class">

            <img src={props.image} id={roundImgOrNot} className="img-style-top-searched" alt=""/>
            <h3>{actualName}</h3>
            <a>{props.subname}</a>
            <div className="top-type-search-display"><span>{props.type}</span></div>
            <button><i className="fas fa-play"></i></button>

        </div>

    )
}

const mapDispatchToProps = dispatch => {

  return {

    onSongClicked : (itemID) => dispatch ({type: actionTypes.SELECT_SONG , value: itemID}),
    onArtistClicked : (itemID) => dispatch ({type: actionTypes.SELECT_ARTIST , value: itemID}),
    onAlbumClicked : (itemID) => dispatch ({type: actionTypes.SELECT_ALBUM , value: itemID}),
    onPlaylistClicked : (itemID) => dispatch ({type: actionTypes.SELECT_PLAYLIST , value: itemID}),
    onProfileClicked : (itemID) => dispatch ({type: actionTypes.SELECT_PROFILE , value: itemID})

  };

};
export default connect(null,mapDispatchToProps)(withRouter(TopResultItem));