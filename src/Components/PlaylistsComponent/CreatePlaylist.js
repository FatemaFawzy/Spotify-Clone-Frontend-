import React ,{ Component} from 'react';
import'./CreatePlaylist.css';

class CreatePlaylist extends Component{
 
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
            <button className="btn close-button" onClick={this.toggle} > <i className="fas fa-times"></i> </button>
        </div>
        <h2 className="d-flex justify-content-center mb-3" > Create new playlist</h2>
        <div className="input_P ">
      <form >
          <div className="form-group container ">
          <label for="new-playlist-name">Playlist Name</label>
          <input autoComplete="off" placeholder="New Playlist" type="text" className="form-control form-control-lg "  id="new-playlist-name"/>
          </div>
      
          </form>
        </div> 
        <div className="container ">
            <div className="row">
              <div className="col-6 d-flex justify-content-end">
              <button className="btn btn-dark border border-light rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" onClick={this.toggle}> Cancel</button>
              </div>
              <div className="col-6 d-flex justify-content-start">
              <a href="" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> Create</a>
        
              </div>
            </div>
           
        </div>     
     </div>
)
}
}

export default CreatePlaylist