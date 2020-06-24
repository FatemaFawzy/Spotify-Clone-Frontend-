import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {AddToPlaylist} from "@/Components/PlaylistsComponent/AddToPlaylist"

describe("CreatePlaylist test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<AddToPlaylist/> ); 
  });


  describe("Component rendering", () => {    
   
    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.add-to-playlist");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Add track to playlist', () => {
      expect(wrapper.find("h2").text()).toContain("Add To playlist")    
    })

  
  })

  


});