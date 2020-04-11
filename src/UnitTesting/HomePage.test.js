//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {HomePage} from "../Containers/HomePage/HomePage";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Home Page test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<HomePage /> ); 
  });


  it("Should have 2 divs", ()=>{
    const div=wrapper.find("div");
    expect(div).toHaveLength(2);
  })

  describe("Home Page componentDidMount test", ()=>{
  
  it('calls componentDidMount', () => {
    jest.spyOn(HomePage.prototype, 'componentDidMount')
    const wrapper = shallow(<HomePage />)
    expect(HomePage.prototype.componentDidMount.mock.calls.length).toBe(1)
  })

})
})