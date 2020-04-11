import React from 'react';
import {EditProfile} from '../../Components/UserAccountProfile/EditProfile/EditProfile';
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

describe("handleChange", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EditProfile passedInfo={{
      email: "fatemafst2009@gmail.com",
      userName: "Fatema",
      gender: "F",
      birthDate: "1998-09-20"
    }} />);
  });

  it('Should update the state when a valid username is entered', () => {
    const userName= wrapper.find("input#userName");
    const event = {
      preventDefault() {},
      target: { id: 'userName', value: 'Fatema'}
    } 
    userName.simulate('change', event);
    expect(wrapper.state().username).toContain("Fatema");
  })

  it('Should update the errorMessage whenthe username is left empty', () => {
    const userName= wrapper.find("input#userName");
    const event = {
      preventDefault() {},
      target: { id: 'userName', value: ''}
    } 
    userName.simulate('change', event);
    expect(wrapper.state().usernameErrorMessage).toContain("You must specify your username");
  })

  it('Should update the gender in state', () => {
    const gender= wrapper.find("select#gender");
    const event = {
      preventDefault() {},
      target: { id: 'gender', value: 'F'}
    } 
    gender.simulate('change', event);
    expect(wrapper.state().gender).toContain("F");
  }) 

  it('Should update the day in state', () => {
    const day= wrapper.find("select#day");
    const event = {
      preventDefault() {},
      target: { id: 'day', value: '20'}
    } 
    day.simulate('change', event);
    expect(wrapper.state().birthDate.day).toContain("20");
  }) 

  it('Should update the month in state', () => {
    const month= wrapper.find("select#month");
    const event = {
      preventDefault() {},
      target: { id: 'month', value: '09'}
    } 
    month.simulate('change', event);
    expect(wrapper.state().birthDate.month).toContain("09");
  })

  it('Should update the year in state', () => {
    const year= wrapper.find("select#year");
    const event = {
      preventDefault() {},
      target: { id: 'year', value: '1998'}
    } 
    year.simulate('change', event);
    expect(wrapper.state().birthDate.year).toContain("1998");
  })


});