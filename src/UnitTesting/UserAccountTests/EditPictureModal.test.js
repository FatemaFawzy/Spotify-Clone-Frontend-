//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import EditPictureModal from "../../Components/UserAccountProfile/EditPictureModal";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("EditPictureModal test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<EditPictureModal/> ); 
  });

  //NOW START THE ACTUAL TESTING
  //YOU CAN CREATE AS MANY "it" ARROW FUNCTION AS YOU WANT TO TEST DIFFERENT FUNCTIONALITIES


  it("Should have a header, body, title, and footer", ()=>{
    const header= wrapper.find("Modal.Header");
    expect(header);

    const body= wrapper.find("Modal.Body");
    expect(body);

    const title= wrapper.find("Modal.Title");
    expect(title);

    const footer= wrapper.find("Modal.Footer");
    expect(footer);
  })

  it("Should have two image tags if the passed newimage is not null, and 1 image tag if it is null", ()=>{
    wrapper.setProps({newimage:"something"});
    expect(wrapper.find("img")).toHaveLength(2);
    
    wrapper.setProps({newimage:null});
    expect(wrapper.find("img")).toHaveLength(1);

  })


})