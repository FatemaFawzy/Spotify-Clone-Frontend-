import React ,{ Component} from 'react';
import './PlaylistPage.css';
import ClickAwayListener from 'react-click-away-listener';
 

class PlaylistPage extends Component
{
  DropMenu ()
  {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  ClickAway()
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  state= { 
    playlistImage: "https://www.udiscovermusic.com/wp-content/uploads/2019/05/Lana-Del-Rey-Born-To-Die-album-cover-web-optimised-820.jpg",
    playlistname: "Born to die",
    playlistCreator: "Lana Del Rey",
    songsNumber: "32 Songs",
  }

   SongInfo = {
    "BornToDie" :
    {
           "id" : 1,
           "SongName" : "Born To Die",
           "Singer": "Lana Del Rey",
           "AlbumName" : "Born To Die",
           "Duration" : "3:52"
    },
    "Love" :
    {
          "id" : 2,
          "SongName" : "Love",
          "Singer": "Lana Del Rey",
          "AlbumName" : "Love",
          "Duration" : "4:15"
    },
    "SummertimeSadness" :
    {
           "id" : 3,
           "SongName" : "Summertime Sadness",
           "Singer": "Lana Del Rey",
           "AlbumName" : "Born To Die",
           "Duration" : "2:58"
    },
    
}

  render(){
  return(
  <div className="playlist-page">
      <div className="content-spacing">
        <div className="row" >
          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
              <li>
              <div class="card ">
              <img src={this.state.playlistImage} class="card-img-top" alt=""/>
              </div>
              </li>

					  <li> <h3> {this.state.playlistname} </h3> </li>
					  <li> <h5> {this.state.playlistCreator} </h5></li>
            <li> <a href="#" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> Play</a> </li>
            <li >
              <span className="like-song"> 	&#9829;</span>
              <ClickAwayListener onClickAway={this.ClickAway}>
              <div className="dropdown ">
              <a onClick={this.DropMenu} className="d-flex justify-content-center font-weight-bolder card-menu" >•••</a>
              <div id="myDropdown" class="dropdown-content ">
                <a href="#">Add to playlist</a>
                <a href="#">Save to library</a>
              </div>
              </div>
              </ClickAwayListener>
          
            </li>
            <li > <div> {this.state.songsNumber}</div> </li>
					</ul>
          </div>

        <div className="col-xs-12  col-lg-7 col-xl-8">
        <table class="table table-borderless">
          <tbody>
                                             {/* BornToDie */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.BornToDie.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.BornToDie.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.BornToDie.Duration}</td>
            </tr>
                                              {/* Love */}
              <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.Love.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.Love.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.Love.Duration}</td>
            </tr>
                                              {/* Summertime Sadness */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.SummertimeSadness.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.SummertimeSadness.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.SummertimeSadness.Duration}</td>
            </tr>

            
                                             {/* BornToDie */}
                                             <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.BornToDie.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.BornToDie.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.BornToDie.Duration}</td>
            </tr>
                                              {/* Love */}
              <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.Love.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.Love.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.Love.Duration}</td>
            </tr>
                                              {/* Summertime Sadness */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.SummertimeSadness.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.SummertimeSadness.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.SummertimeSadness.Duration}</td>
            </tr>

            
                                             {/* BornToDie */}
                                             <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.BornToDie.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.BornToDie.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.BornToDie.Duration}</td>
            </tr>
                                              {/* Love */}
              <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.Love.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.Love.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.Love.Duration}</td>
            </tr>
                                              {/* Summertime Sadness */}
            <tr>
              <th scope="row" className="music-sign d-flex justify-content-center">	 </th>
              <td className="song-content">
                <ul className="list-unstyled">
                  <li>{this.SongInfo.SummertimeSadness.SongName}</li>
                  <li className="song-info"><a href='#'>{this.SongInfo.SummertimeSadness.Singer} </a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>Born To Die </a></li>
                </ul>
              </td>
              <td className="d-flex justify-content-center" ><a className="Menu">•••</a></td>
              <td className="duration">{this.SongInfo.SummertimeSadness.Duration}</td>
            </tr>
       
      </tbody>
    </table>
      </div> 
      </div>
      </div>
    </div>
  )
}
}

export default PlaylistPage;