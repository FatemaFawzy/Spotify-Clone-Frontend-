import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {mount} from 'enzyme';
import WelcomePgae from "../../Containers/WelcomePage/welcomePage"
import { MainNavbar } from "../../Components/WelcomeRelated/MainNavbar";

describe("Welcome Page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<WelcomePgae/> ); 
  });


  describe("Component rendering", () => {    
   

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.welcome-page-body");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Display Welcome page', () => {
      expect(wrapper.find("h1").text()).toContain("Music For Everyone.")    
    })

    
    

  })


});