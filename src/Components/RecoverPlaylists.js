import React from "react";
import './RecoverPlaylists.css';


const DeletedPlaylists = {
       "Playlist1" :
       {
              "id" : 200,
              "creatingDate" : "3/19/20",
              "title": "test1",
              "NumberOfSongs" : 12,
       },
       "Playlist2" :
       {
              "id" : 215,
              "creatingDate" : "3/20/20",
              "title": "test2",
              "NumberOfSongs" : 35,
       }
       
}

const RecoverPlaylists=()=>(

<div className="contentLayout recoverPlaylists">
        
       <h2 className="pageTitle"> Recover playlists </h2>
       <hr/>
       <p className="content">Accidentally deleted a playlist? No worries, find the deleted playlist you'd like to recover below, then click RESTORE to recover it.</p>
       <div className="tableLayout">
       <table class="table table-striped table-borderless">
              <thead>
              <tr className="tableTitles">
              <th scope="col">deleted</th>
              <th scope="col">title</th>
              <th scope="col">songs</th>
              <th scope="col">retore</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td> {DeletedPlaylists.Playlist1.creatingDate}</td>
              <td> {DeletedPlaylists.Playlist1.title} </td>
              <td>{DeletedPlaylists.Playlist1.NumberOfSongs}</td>
              <td> <a href="" className="Restore"> Restore </a></td>
              </tr>
              <tr>
              <td> {DeletedPlaylists.Playlist2.creatingDate}</td>
              <td> {DeletedPlaylists.Playlist2.title} </td>
              <td>{DeletedPlaylists.Playlist2.NumberOfSongs}</td>
              <td> <a href="" className="Restore"> Restore </a></td>
              </tr>
              </tbody>
              </table>
              </div>
             

</div>


);


export default RecoverPlaylists