import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import Bottom from "@/Components/WelcomeRelated/Bottom"

describe("Bottom test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Bottom/> ); 
  });


  describe("Component rendering", () => {   
    
    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("footer.bottom-bar");
      expect(wrapperdiv).toHaveLength(1);
    })
   
    it('Display Bottom bar', () => {
      expect(wrapper.find("h5").text()).toContain("Useful Links")    
    })
  })


});