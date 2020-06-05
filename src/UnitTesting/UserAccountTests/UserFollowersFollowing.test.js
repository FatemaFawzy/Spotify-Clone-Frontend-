//NOTE THAT THE FILE NAME SHOULD BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import UserFollowersFollowing from "../../Components/UserAccountProfile/FollowersFollowing/UserFollowersFollowing";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("UserFollowersFollowing test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<UserFollowersFollowing/> ); 
  });

  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES
  it("Should have 2 NavLinks", ()=>{
    const NavLinks= wrapper.find("NavLink");
    expect(NavLinks).toHaveLength(2);
  })
  it("Should have a switch tag, 2 routes and 1 redirect", ()=>{
    expect(wrapper.find("Switch")).toHaveLength(1);
    expect(wrapper.find("Route")).toHaveLength(2);
    expect(wrapper.find("Redirect")).toHaveLength(1);
  })

})