//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {ArtistHomePage} from "../../Containers/ArtistAccount/ArtistHomePage";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 




describe("ArtistHomePage Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<ArtistHomePage /> ); 
  });

  
  it("Should have 1 button", ()=>{
    const buttons=wrapper.find("button");
    expect(buttons).toHaveLength(2);
  })
  

  it("Should have 1 header", ()=>{ 
    const headers=wrapper.find("h1");
    expect(headers).toHaveLength(1);
  })

  it("Should have 1 paragraph", ()=>{
    const paragraphs=wrapper.find("p");
    expect(paragraphs).toHaveLength(1);
  })

  it("Should have 1 Link", ()=>{
    const links=wrapper.find("Link");
    expect(links).toHaveLength(1);
  })
})

 
 



  



   
    
  

  


