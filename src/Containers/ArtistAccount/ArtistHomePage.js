import React,{Component} from 'react';
 import './ArtistHomePage.css';
import ArtistHomePageNavbar from "./ArtistNavbar";
import ComponentBlock from "../../Components/HomePageComponents/ComponentBlock"
import * as itemType from "../../Constants/itemType";
import {connect} from "react-redux";
import {BASEURL} from "../../Constants/baseURL";
import {NavLink,Link} from "react-router-dom";


/** Class ArtistHomePage
 * @category ArtistHomePage
 * @extends Component
 */
export class ArtistHomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
   
     

     
    
    }
    
  }


  render(){
    return (
      <div className ="home-navbar-artist" >
        
             
            <ArtistHomePageNavbar accountType="regular" name="Ali Halafawy" color="transparent"
            image="https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/19397029_10210794027939033_5811382860033366804_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_eui2=AeHEhGNHMDc070CTQv4WD5FK-tEUbysbE-HFFkFOk7OxsfeTak6rLywRWjbRlCDjWmzjtl79NUg2XF9AsJX_0QE9j0LnqnOoo_ADLnnZUnidEA&_nc_ohc=QgP5sx3F3dsAX-nzFSx&_nc_ht=scontent.fcai3-1.fna&oh=86cb020fb7ea1a4e8c69aaaf075680d5&oe=5EA58791"/>
           <div className="container  artist-top-section " style={{ backgroundImage: `url(https://i.scdn.co/image/378cc874bb148ccd0db2596b1e6b3a7f38ad301a)` }}>

<div className="montly-listeners">
  Average rating: 5/5
</div>

<div>
  <h1 className="artist-name font-weight-bolder"> Pink Floyd </h1>
</div>

         <div id="buttons">
          
         <button id="follow-button" className="btn btn-success rounded-pill " onClick={this.followArtist}>
            Followers: 100M
          </button>

          <button id="follow-button" className="btn btn-success rounded-pill " onClick={this.followArtist}>
            Following: 10
          </button>
        </div> 

        <div id="artist-profile-sections">
\
          <Link to="#" id="about" 
          className="artist-profile-sections"> Biography </Link> 
        </div>

        
          
      </div>
      <p className="Bio">Pink Floyd were an English rock band formed in London in 1965. Gaining a following as a psychedelic rock group, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre. They are one of the most commercially successful and influential bands in popular music history.

Pink Floyd were founded by students Syd Barrett (guitar, lead vocals), Nick Mason (drums), Roger Waters (bass guitar, vocals), and Richard Wright (keyboards, vocals). Under Barrett's leadership, they released two charting singles and a successful debut album, The Piper at the Gates of Dawn (1967). Guitarist and vocalist David Gilmour joined in December 1967; Barrett left in April 1968 due to deteriorating mental health. Waters became the primary lyricist and thematic leader, devising the concepts behind the albums The Dark Side of the Moon (1973), Wish You Were Here (1975), Animals (1977), The Wall (1979), and The Final Cut (1983). The band also composed several film scores.

Following personal tensions, Wright left Pink Floyd in 1979, followed by Waters in 1985. Gilmour and Mason continued as Pink Floyd, rejoined later by Wright. The three produced two more albums—A Momentary Lapse of Reason (1987) and The Division Bell (1994)—and toured both albums before entering a long period of inactivity. In 2005, all but Barrett reunited for a one-off performance at the global awareness event Live 8. Barrett died in 2006, and Wright in 2008. The last Pink Floyd studio album, The Endless River (2014), was based on unreleased material from the Division Bell recording sessions.

Pink Floyd were one of the first British psychedelia groups, and are credited with influencing genres such as progressive rock and ambient music. Four albums topped US or UK record charts; the songs "See Emily Play" (1967) and "Another Brick in the Wall, Part 2" (1979) were their only top 10 singles in either territory. The band were inducted into the US Rock and Roll Hall of Fame in 1996 and the UK Music Hall of Fame in 2005. By 2013, they had sold more than 250 million records worldwide, with The Dark Side of the Moon and The Wall two of the best-selling albums of all time.</p>
</div>
      
    );


  }
  
}

const mapStateToProps = state => {

  return {
    userID:state.userID,
    selectedArtistID : state.selectedArtistID,
  };

};
export default connect(mapStateToProps)(ArtistHomePage);

