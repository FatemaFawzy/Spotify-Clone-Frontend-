import React from 'react';
import {ArtistProfileContent} from '../../Components/ArtistProfile/ArtistProfileContent';
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("Testing ArtistProfileContent redering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistProfileContent match={{url: "url"}}/>);
  });

  // it('should have the correct path', () => {
  //   expect(wrapper.find("Route").at(0).path()).toContain("/overview/");    
  // });
  it('should have the correct number of tags', () => {
    expect(wrapper.find("Switch")).toHaveLength(1);
    expect(wrapper.find("Route")).toHaveLength(3); 
    expect(wrapper.find("Redirect")).toHaveLength(1);   
  });
});