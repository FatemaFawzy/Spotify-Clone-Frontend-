import React from 'react';
import ArtistProfile from '../Containers/ArtistProfile/ArtistProfile';
import { shallow } from 'enzyme';

describe("[UNIT] Testing the ArtistProfile component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistProfile/>);
  });

  describe("Testing ArtistProfile redering", () => { 

    it('displays the header of the page', () => {
      expect(wrapper.find("#overview").text()).toContain("Overview");    
    })

  });

  
});