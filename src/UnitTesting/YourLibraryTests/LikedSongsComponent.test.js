//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {LikedSongsComponent} from "@/Components/YourLibraryComponents/LikedSongsComponent"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("OtherUser Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<LikedSongsComponent/> ); 
  });


  //IN THIS FUNCTION I AM TESTING TO ASSERT THAT THE COMPONENT HAS AN IMAGE TAG INSIDE OF IT
  it("Should have a specific header", ()=>{
    const header= wrapper.find("h1");
    expect(header.text()).toContain("Liked Songs");
  })

  it("Should have one button", ()=>{
    const button= wrapper.find("button");
    expect(button).toHaveLength(1);
  })

  describe("Liked Songs componentDidMount test", ()=>{
  
    it('calls componentDidMount', () => {
      jest.spyOn(LikedSongsComponent.prototype, 'componentDidMount')
      const wrapper = shallow(<LikedSongsComponent />)
      expect(LikedSongsComponent.prototype.componentDidMount.mock.calls.length).toBe(1)
    })
  
  })

})