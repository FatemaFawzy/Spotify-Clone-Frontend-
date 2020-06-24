import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {DeletePlaylist} from "@/Components/PlaylistsComponent/DeletePlaylist"

describe("Delete Playlist test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<DeletePlaylist/> ); 
  });


  describe("Component rendering", () => {    

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.delete-playlist");
      expect(wrapperdiv).toHaveLength(1);
    })
   
    it('Delete playlist', () => {
      expect(wrapper.find("h2").text()).toContain("Do you really want to delete this playlist ?")    
    })
  })


});