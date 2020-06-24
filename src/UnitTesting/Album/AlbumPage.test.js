import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {AlbumPage} from "@/Components/AlbumComponent/AlbumPage"

describe("AlbumPage test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<AlbumPage/> ); 
  });


  describe("Component rendering", () => {    
   
    it('Album Page', () => {
      expect(wrapper.state('playAlbum')).toEqual('Play');   
    })
    
    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.album-page");
      expect(wrapperdiv).toHaveLength(1);
    })
  })

  describe("Testing functions", () => {   
    it('play button', () => {
      expect(wrapper.find('button#play-button').text()).toContain('Play');
      wrapper.find("button#play-button").simulate('click');
      expect(wrapper.find('button#play-button').text()).toContain('Pause');
      wrapper.find("button#play-button").simulate('click');
      expect(wrapper.find('button#play-button').text()).toContain('Play');
    })
  
  })

});