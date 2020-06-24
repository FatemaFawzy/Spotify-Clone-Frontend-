import React, { Component } from 'react';
import "./RelatedArtistsContent.css";
import "@/Containers/GenericComponenets/GeneralItem";
import GeneralItem from "@/Containers/GenericComponenets/GeneralItem";
import {connect} from "react-redux";
import {BASEURL} from "@/Constants/baseURL";
import * as itemType from "@/Constants/itemType";

/** Class RelatedArtistsContent 
 * @category RelatedArtistsContent
 * @extends Component
 */
export class RelatedArtistsContent extends Component {

  state = {
    /**Array of artists' info
   * @memberof RelatedArtistsContent
   * @type {Array<artistInfo>}
   */
    artistInfo: [
      {
        _id : "5e8902475501bd142cbeff13",
        artistName : "Vance Joy",
        about : "A British singer/songwriter with a keen sense for both atmosphere and melody, Tom Odell's piano-led odes to heartache and pain are emotional, raw, and often hushed affairs that invoke names like Leonard Cohen and Jeff Buckley. His acclaimed 2012 debut EP earned him a BRITs Critics' Choice award, and his first full-length outing, 2013's Long Way Down, reached number one on the U.K. albums chart. Uneasy with the idea of fame, Odell recorded his next two releases in New York and Los Angeles before returning home to London for 2018's intimate Jubilee Road.",
        gender : "M",
        birthDate : "2001-12-18T00:00:00.000Z",
        imagePath : "https://www.abc.net.au/cm/rimage/8701768-3x2-xlarge.jpg?v=2",
        isActive : false,
        rating : 4.02,
        genres : [
            "Pop",
            "R&B",
            "Country"
        ],
        __v : 0
     },
     {
        _id : "5e8902475501bd142cbeff13",
        artistName : "Hozier",
        about : "A British singer/songwriter with a keen sense for both atmosphere and melody, Tom Odell's piano-led odes to heartache and pain are emotional, raw, and often hushed affairs that invoke names like Leonard Cohen and Jeff Buckley. His acclaimed 2012 debut EP earned him a BRITs Critics' Choice award, and his first full-length outing, 2013's Long Way Down, reached number one on the U.K. albums chart. Uneasy with the idea of fame, Odell recorded his next two releases in New York and Los Angeles before returning home to London for 2018's intimate Jubilee Road.",
        gender : "M",
        birthDate : "2001-12-18T00:00:00.000Z",
        imagePath : "https://e-cdns-images.dzcdn.net/images/artist/4970da41372f40bb2d85b71d41c359e8/500x500.jpg",
        isActive : false,
        rating : 4.02,
        genres : [
            "Pop",
            "R&B",
            "Country"
        ],
        __v : 0
     },
       {
        _id : "5e8902475501bd142cbeff13",
        artistName : "Birdy",
        about : "A British singer/songwriter with a keen sense for both atmosphere and melody, Tom Odell's piano-led odes to heartache and pain are emotional, raw, and often hushed affairs that invoke names like Leonard Cohen and Jeff Buckley. His acclaimed 2012 debut EP earned him a BRITs Critics' Choice award, and his first full-length outing, 2013's Long Way Down, reached number one on the U.K. albums chart. Uneasy with the idea of fame, Odell recorded his next two releases in New York and Los Angeles before returning home to London for 2018's intimate Jubilee Road.",
        gender : "F",
        birthDate : "2001-12-18T00:00:00.000Z",
        imagePath : "https://www.noviscore.com/artist-picture-birdy.jpg",
        isActive : false,
        rating : 4.02,
        genres : [
            "Pop",
            "R&B",
            "Country"
        ],
        __v : 0
     },
       {
        _id : "5e8902475501bd142cbeff13",
        artistName : "George Ezra",
        about : "A British singer/songwriter with a keen sense for both atmosphere and melody, Tom Odell's piano-led odes to heartache and pain are emotional, raw, and often hushed affairs that invoke names like Leonard Cohen and Jeff Buckley. His acclaimed 2012 debut EP earned him a BRITs Critics' Choice award, and his first full-length outing, 2013's Long Way Down, reached number one on the U.K. albums chart. Uneasy with the idea of fame, Odell recorded his next two releases in New York and Los Angeles before returning home to London for 2018's intimate Jubilee Road.",
        gender : "M",
        birthDate : "2001-12-18T00:00:00.000Z",
        imagePath : "https://www.enca.com/sites/default/files/George%20Ezra%20image%20low-res%5B2%5D%20copy.jpg",
        isActive : false,
        rating : 4.02,
        genres : [
            "Pop",
            "R&B",
            "Country"
        ],
        __v : 0
     },
     {
        _id : "5e8902475501bd142cbeff13",
        artistName : "James Bay",
        about : "A British singer/songwriter with a keen sense for both atmosphere and melody, Tom Odell's piano-led odes to heartache and pain are emotional, raw, and often hushed affairs that invoke names like Leonard Cohen and Jeff Buckley. His acclaimed 2012 debut EP earned him a BRITs Critics' Choice award, and his first full-length outing, 2013's Long Way Down, reached number one on the U.K. albums chart. Uneasy with the idea of fame, Odell recorded his next two releases in New York and Los Angeles before returning home to London for 2018's intimate Jubilee Road.",
        gender : "M",
        birthDate : "2001-12-18T00:00:00.000Z",
        imagePath : "https://d3iln1l77n73l7.cloudfront.net/couch_images/attachments/000/083/473/original/james-bay1.jpg?2016",
        isActive : false,
        rating : 4.02,
        genres : [
            "Pop",
            "R&B",
            "Country"
        ],
        __v : 0
     },
       {
        _id : "5e8902475501bd142cbeff13",
        artistName : "Gabrielle Aplin",
        about : "A British singer/songwriter with a keen sense for both atmosphere and melody, Tom Odell's piano-led odes to heartache and pain are emotional, raw, and often hushed affairs that invoke names like Leonard Cohen and Jeff Buckley. His acclaimed 2012 debut EP earned him a BRITs Critics' Choice award, and his first full-length outing, 2013's Long Way Down, reached number one on the U.K. albums chart. Uneasy with the idea of fame, Odell recorded his next two releases in New York and Los Angeles before returning home to London for 2018's intimate Jubilee Road.",
        gender : "F",
        birthDate : "2001-12-18T00:00:00.000Z",
        imagePath : "https://is4-ssl.mzstatic.com/image/thumb/Features113/v4/1e/53/a2/1e53a263-d9a1-4b54-b11e-5e0ae2412a1f/mza_7945388471635215184.png/800x800bb.jpeg",
        isActive : false,
        rating : 4.02,
        genres : [
            "Pop",
            "R&B",
            "Country"
        ],
        __v : 0
     },
         {
        _id : "5e8902475501bd142cbeff13",
        artistName : "Kodaline",
        about : "A British singer/songwriter with a keen sense for both atmosphere and melody, Tom Odell's piano-led odes to heartache and pain are emotional, raw, and often hushed affairs that invoke names like Leonard Cohen and Jeff Buckley. His acclaimed 2012 debut EP earned him a BRITs Critics' Choice award, and his first full-length outing, 2013's Long Way Down, reached number one on the U.K. albums chart. Uneasy with the idea of fame, Odell recorded his next two releases in New York and Los Angeles before returning home to London for 2018's intimate Jubilee Road.",
        gender : "M",
        birthDate : "2001-12-18T00:00:00.000Z",
        imagePath : "https://www.letras.com.br/storage/artista/7/71.jpg",
        isActive : false,
        rating : 4.02,
        genres : [
            "Pop",
            "R&B",
            "Country"
        ],
        __v : 0
     }
    ],
  }
   /**A function that requests artist info on rendering
   * @memberof RelatedArtistsContent
   * @func componentDidMount
   */
  componentDidMount() {
    
    const url = BASEURL + "users/artists/related";

    const requestOptions = {
        method: 'GET',
        headers: { 'x-auth': this.props.userToken , 'artistId' : this.props.id },
      }

    fetch(url,requestOptions)
      .then((response) => {
        console.log(response)
        return response.json();
        
      })
      .then((data) => {
        if(data[0].artistName) this.setState({artistInfo: data});
         console.log(data);
      })
      .catch((error)=>{
        console.log(error);

      })
  }

  render(){
    return (

      <div className="related-artists-content">

            {this.state.artistInfo.map((artist,index)=>(   
                <div > 
                  {/* <GeneralItem className="genral-item" image={ BASEURL + "Images/" +artist.imagePath}
                  name={artist.artistName} subname="Artist" type={itemType.ARTIST} roundimage="1" id={artist._id} key={artist._id}></GeneralItem> */}
                  <GeneralItem className="genral-item" image={ artist.imagePath}
                  name={artist.artistName} subname="Artist" type={itemType.ARTIST} roundimage="1" id={artist._id} key={artist._id}></GeneralItem>
                </div>  
            ))}

        {/* <GeneralItem className="genral-item" image="https://i.scdn.co/image/7d186c3a80955b82a8cc46fe86bdf305478629e8" name="Vance Joy" subname="Artist"
         type="ARTIST" roundimage="1"></GeneralItem> */}

      </div>
    );
  }
}

  /**A function connecting component to redux store
 * @memberof RelatedArtistsContent
 * @func mapStateToProps
 */
const mapStateToProps = state => {

  return {
    userToken : state.userToken
    //now you have access to the userToken as this.props.userToken inside the class component.
  };

};

export default connect(mapStateToProps)(RelatedArtistsContent);

