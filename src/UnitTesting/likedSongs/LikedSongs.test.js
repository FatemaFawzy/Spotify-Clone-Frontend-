import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {LikedSongs} from "../../Components/LikedSongs/LikedSongs"

describe("Liked Songs test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<LikedSongs/> ); 
  });


  describe("Component rendering", () => {    
   
    it('Liked Songs', () => {
      expect(wrapper.find("h3").text()).toContain("Liked Songs")    
    })

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.liked-songs-page");
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