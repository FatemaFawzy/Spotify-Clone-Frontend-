//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import CollapseDropDown from "@/Containers/GenericComponenets/CollapseDropDown";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Collapse DropDown test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<CollapseDropDown /> ); 
  });


  it("Should have 7 icons", ()=>{
    const icons=wrapper.find("i");
    expect(icons).toHaveLength(7);
  })
  
  it("Should have 1 NavLink", ()=>{
    const NavLinks=wrapper.find("NavLink");
    expect(NavLinks).toHaveLength(1);
  })

})