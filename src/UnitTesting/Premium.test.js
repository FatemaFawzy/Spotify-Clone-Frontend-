//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {Premium} from "../Containers/PremiumBenefits/Premium";


//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Premium Container test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Premium/> ); 
  });

  it("Should have a certain header", ()=>{
    const header= wrapper.find("h1#get-premium");
    expect(header.text()).toContain("Get Premium free for 1 month");
  })

  it("Should have a certain sub heading", ()=>{
    const subhead= wrapper.find("h2#price");
    expect(subhead.text()).toContain("Just EGP 49.99/month after. Cancel anytime.");
  })

})