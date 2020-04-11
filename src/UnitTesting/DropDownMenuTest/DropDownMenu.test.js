//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {DropDownMenu} from "../../Containers/GenericComponenets/DropDownMenu"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Drop Down Menu Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<DropDownMenu/> ); 
  });


  //IN THIS FUNCTION I AM TESTING TO ASSERT THAT THE COMPONENT HAS AN IMAGE TAG INSIDE OF IT
  it("Should have an image", ()=>{
    const image= wrapper.find("img");
    expect(image).toHaveLength(1);
  })

  it("Should have 3 buttons", ()=>{
    const buttons= wrapper.find("button");
    expect(buttons).toHaveLength(3);
  })
  describe("Drop Down Menu componentDidMount test", ()=>{
  
    it('calls componentDidMount', () => {
      jest.spyOn(DropDownMenu.prototype, 'componentDidMount')
      const wrapper = shallow(<DropDownMenu />)
      expect(DropDownMenu.prototype.componentDidMount.mock.calls.length).toBe(1)
    })
  
  })

})