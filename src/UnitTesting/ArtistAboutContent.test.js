import React from 'react';
import ArtistAboutContent from '../Components/ArtistProfile/ArtistAboutContent';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("[UNIT] Testing the ArtistAboutContent component", () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ArtistAboutContent/>);
  });

  describe("Testing ArtistAboutContent redering", () => { 

    it('displays the header of the page', () => {
      expect(wrapper.find("#biography").text()).toContain("Biography");    
    });

  });

  
});