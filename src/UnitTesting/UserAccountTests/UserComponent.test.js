//NOTE THAT THE FILE NAME SHOULD BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {UserComponent} from "@/Components/UserAccountProfile/FollowersFollowing/UserComponent";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("UserComponent test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<UserComponent/> ); 
  });

  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES
  it("Should have an image", ()=>{
    const image= wrapper.find("img");
    expect(image).toHaveLength(1);
  })

  it("Should have a name with the passed prop", ()=>{
    wrapper.setProps({name:"testName"})
    const name= wrapper.find("h5");
    expect(name.text()).toEqual("testName");
  })
})