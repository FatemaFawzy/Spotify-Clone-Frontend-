import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {CreatePlaylist} from "@/Components/PlaylistsComponent/CreatePlaylist"

describe("CreatePlaylist test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<CreatePlaylist/> ); 
  });


  describe("Component rendering", () => {    
   
    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.create-playlist");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('creaate playlist', () => {
      expect(wrapper.find("h2").text()).toContain("Create new playlist")    
    })
   
  })


});

