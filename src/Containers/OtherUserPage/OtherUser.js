import React,{Component} from "react";
import "./OtherUser.css";
import {connect} from "react-redux";
import emptyprofilepic from "../../assets/emptyprofilepic.jpg";
import GeneralItem from "../GenericComponenets/GeneralItem";
import * as itemType from "../../Constants/itemType";

/** Class OtherUser that represents the page og another profile
 * @category OtherUser
 * @extends Component
 */

export class OtherUser extends Component {

  state={

        /**A variable that holds the related playlists to a certaian profile that is returned from the request
   * @memberof OtherUser
   * @type {Array<object>}
   */
    userRelated:[],
  }

    /**A function that renders when the component is called
   * @memberof OtherUser
   * @func componentDidMount
   */

  componentDidMount(){

    // TODO: I Should send a request to get the info related to the user with ID = this.props.profileID

      const url = "https://jsonplaceholder.typicode.com/photos"; 
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({userRelated:data.slice(0,10)})
        })
        .catch((error)=>{
          console.log(error);
        })
  }

  



  render(){

    const RelatedItems=this.state.userRelated.map((item)=>{
      return(
        <GeneralItem
        name={item.title}
        subname="whatever"
        image={item.url}
        key={item.id}
        id={item.id}
        type={itemType.PLAYLIST}/>
      )
    })
    return(
      <div className="other-user-page-class">
        <div className="other-profile-pic-name">
          <img
            className="other-profile-pic-class"
            src={emptyprofilepic}
            alt={emptyprofilepic}/>
          <h2 className="other-profile-name-class">User With ID {this.props.profileID}</h2>
        </div>

      {RelatedItems}
      </div>


    )
  }



}

const mapStateToProps = state => {

  return {
    profileID:state.selectedProfileID
  };

};

    


export default connect(mapStateToProps)(OtherUser);