//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {SeeAllArtists} from "@/Containers/HomePage/SeeAllArtists";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("See All Artists page test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<SeeAllArtists /> ); 
  });


  it("Should have 2 divs", ()=>{
    const div=wrapper.find("div");
    expect(div).toHaveLength(2);
  })

  describe("See All Artists componentDidMount test", ()=>{
  
    it('calls componentDidMount', () => {
      jest.spyOn(SeeAllArtists.prototype, 'componentDidMount')
      const wrapper = shallow(<SeeAllArtists />)
      expect(SeeAllArtists.prototype.componentDidMount.mock.calls.length).toBe(1)
    })

  })
  
  

})