//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {HomePageSidebar} from "../Components/HomePage/HomePageSidebar";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Home Page Sidebar test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<HomePageSidebar /> ); 
  });


  it("Should have 5 lis", ()=>{
    const list=wrapper.find("li");
    expect(list).toHaveLength(5);
  })

  it("Should have 2 List2 classNames", ()=>{
    const List2ClassName=wrapper.find(".List2");
    expect(List2ClassName).toHaveLength(2);
  })
  
  describe("Home Page Sidebar componentDidMount test", ()=>{
  
    it('calls componentDidMount', () => {
      jest.spyOn(HomePageSidebar.prototype, 'componentDidMount')
      const wrapper = shallow(<HomePageSidebar />)
      expect(HomePageSidebar.prototype.componentDidMount.mock.calls.length).toBe(1)
    })

  })
  
  

})