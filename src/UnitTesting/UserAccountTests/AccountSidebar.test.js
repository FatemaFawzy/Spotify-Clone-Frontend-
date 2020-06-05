//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import AccountSideBar from "../../Components/UserAccountProfile/AccountSideBar"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("AccountSideBar Container test", ()=>{


  it("Should reder the wrpper div correctly", ()=>{
    const wrapper = shallow(<AccountSideBar/> ); 
    const wrapperdiv= wrapper.find("div.account-sidebar");
    expect(wrapperdiv).toHaveLength(1);
  })

  it("Should have one image tag", ()=>{
    const wrapper = shallow(<AccountSideBar image=""/> ); 
    const imagetag= wrapper.find("img");
    expect(imagetag).toHaveLength(1);
  })

  it("Should have 3 navlinks", ()=>{
    const wrapper = shallow(<AccountSideBar image=""/> ); 
    const navlinks= wrapper.find("NavLink");
    expect(navlinks).toHaveLength(4);
  })




})