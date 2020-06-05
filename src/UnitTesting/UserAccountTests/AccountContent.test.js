//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import AccountContent from "../../Components/UserAccountProfile/AccountContent";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("AccountContent Container test", ()=>{

  it("Should have a warpper div", ()=>{
    const wrapper = shallow(<AccountContent /> ); 
    const divwithwrapperclass= wrapper.find("div.account-content");
    expect(divwithwrapperclass).toHaveLength(1);
  })

  it("Should have three routes", ()=>{
    const wrapper = shallow(<AccountContent /> ); 
    const Routes= wrapper.find("Route");
    expect(Routes).toHaveLength(4);
  })

  

  it("Should have one redirect", ()=>{
    const wrapper = shallow(<AccountContent /> ); 
    const Redirect= wrapper.find("Redirect");
    expect(Redirect).toHaveLength(1);
  })


})