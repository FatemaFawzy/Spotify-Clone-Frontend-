import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {MainNavbar} from "@/Components/WelcomeRelated/MainNavbar"

describe("Main Navbar test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<MainNavbar/> ); 
  });


  describe("Showing page when clicking", () => {  
    
    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("section.nav-bar1");
      expect(wrapperdiv).toHaveLength(1);
    })
   
    it('Display playlist page', () => {
      expect(wrapper.find("span.h3").text()).toContain(" | ")  
    })
  })


});