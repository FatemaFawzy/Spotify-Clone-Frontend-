//NOTE THAT THE FILE NAME SHOULD BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import ListOfUsers from "@/Components/UserAccountProfile/FollowersFollowing/ListOfUsers";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("ListOfUsers test", ()=>{

  //NOW START THE ACTUAL TESTING
  it("Should have a warpping div", ()=>{
    const wrapper = shallow(<ListOfUsers/> ); 
    expect(wrapper.find("div.list-of-users-class")).toHaveLength(1);
  })

})