import React from 'react';
import ArtistOverviewContent from '../Components/ArtistProfile/ArtistOverviewContent';
import { shallow } from 'enzyme';

describe("[UNIT] Testing the ArtistOverviewContent component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistOverviewContent/>);
  });

  describe("Testing ArtistOverviewContent redering", () => { 

    it('displays the header of the page', () => {
      expect(wrapper.find("#popular-h1").text()).toContain("Popular");    
    });

  });

  
});