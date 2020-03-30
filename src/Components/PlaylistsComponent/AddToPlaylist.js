import React ,{ Component} from 'react';
import'./AddToPlaylist.css';

class AddToPlaylist extends Component{
 
  toggle()
 {
   var blur=document.getElementById('blur');
   blur.classList.toggle('active')
   var popup=document.getElementById('popup');
   popup.classList.toggle('active')
 }

render()
{
return (
  <div className="create-playlist" id="popup" >
        <div className="d-flex justify-content-center">
            <button className="btn close-button "  onClick={this.toggle}> <i className="fas fa-times"></i> </button>
        </div>
        <h2 className="d-flex justify-content-center mb-3" > Add To playlist</h2>
        </div> 
        <div className="container ">
            <div className="row">
              <div className="col-6 d-flex justify-content-start">
              <a href="/webplayer/createplaylist" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> New Playlist</a>
        
              </div>
            </div>
           
        </div>     
     </div>
)
}
}

export default AddToPlaylist