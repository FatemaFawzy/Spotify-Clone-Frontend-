//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {AccountLayout} from "@/Containers/UserAccountProfile/AccountLayout"

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("AccountLayout Container test", ()=>{


  it("Should have a warpper div", ()=>{
    const wrapper = shallow(<AccountLayout /> ); 
    const divwithwrapperclass= wrapper.find("div.content-wrapper");
    expect(divwithwrapperclass).toHaveLength(1);
  })

  it("Should have an AccountSidebar", ()=>{
    const wrapper = shallow(<AccountLayout /> ); 
    const AccountSidebar= wrapper.find("AccountSidebar");
    expect(AccountSidebar).toHaveLength(1);
  })

  it("Should have AccountContent", ()=>{
    const wrapper = shallow(<AccountLayout /> ); 
    const AccountContent= wrapper.find("AccountContent");
    expect(AccountContent).toHaveLength(1);
  })

  it("Should have a bottom", ()=>{
    const wrapper = shallow(<AccountLayout /> ); 
    const Bottom= wrapper.find("Bottom");
    expect(Bottom).toHaveLength(1);
  })
})