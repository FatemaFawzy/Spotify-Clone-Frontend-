import React ,{ Component} from 'react';
import'./DeletePlaylist.css';
import {BASEURL} from "@/Constants/baseURL";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";


/** Class DeletePlaylist 
 * @category DeletePlaylist
 * @extends Component
 */
export class DeletePlaylist extends Component{
  constructor(props){
    super(props);
  }
  
  /**Function to handle delete playlist
   * @memberof DeletePlaylist
   * @func handleDelete
   */ 
handleDelete (str) {
  // const url = BASEURL+ "playlists";    
  // const requestOptions = {
  //   method: 'DELETE', 
  //   headers: { 'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhNzAxOTU0ZmU3NTJjMTQ5OGY3MjEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg2MTMxOTc0fQ.5CqQJG2E8n_1h8-_XC_tb1HbnVuIXstLQpTyjoWK-Dk',
  //   'Content-Type': 'application/json' },
  //   body: JSON.stringify({ playlistName: str})
  // }; 
  //    fetch(url,requestOptions)
  //     .then((res) => {res.text(); window.location.reload(true);})
  //     .then((data) =>{ 
  //       console.log(data);

  //     })
  //     .catch((err)=>console.log(err))
  //     this.props.history.replace("/webplayer/yourlibrary")
}

render(){
  return(
<div className="delete-playlist ">
<div id="delete" className="modal fade" role="dialog">
<div className="modal-dialog modal-xl  ">
<div className="modal-content">


            <button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
        
          <h2 className="d-flex justify-content-center mb-3" >Do you really want to delete this playlist ?</h2>
          <div className="container ">
              <div className="row">
                <div className="col-6 d-flex justify-content-end">
                <button className="btn btn-dark border border-light rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" data-dismiss="modal"> Cancel</button>
                </div>
                <div className="col-6 d-flex justify-content-start">
                <a onClick={() => this.handleDelete(this.props.delete)} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" data-dismiss="modal" > Delete</a>
          
            </div>
        </div>
        </div>
        </div>    
</div>
</div>
</div>
  )
}
}

/**A function connecting component to redux store
 * @memberof DeletePlaylist
 * @func mapStateToProps
 */
const mapStateToProps = state =>{
  return{
    userToken: state.userToken
  };
};

export default connect(mapStateToProps) (withRouter (DeletePlaylist));