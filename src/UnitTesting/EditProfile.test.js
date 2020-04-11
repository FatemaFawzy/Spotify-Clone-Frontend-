import React from 'react';
import {EditProfile} from '../Components/UserAccountProfile/EditProfile/EditProfile';
import { shallow } from 'enzyme';

describe("Testing EditProfile redering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EditProfile passedInfo={{
      email: "fatemafst2009@gmail.com",
      userName: "Fatema",
      gender: "F",
      birthDate: "1998-09-20"
    }} />);
  });

  it('displays the header of the page', () => {
    expect(wrapper.find("h1").at(1).text()).toContain("Edit Profile");    
  });

  
});