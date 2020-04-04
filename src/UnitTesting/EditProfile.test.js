import React from 'react';
import EditProfile from '../Components/UserAccountProfile/EditProfile/EditProfile';
import { shallow } from 'enzyme';

describe("[UNIT] Testing the EditProfile component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EditProfile/>);
  });

  describe("Testing EditProfile redering", () => { 

    it('displays the header of the page', () => {
      expect(wrapper.find("h1").text()).toContain("Edit Profile");    
    });

  });

  
});