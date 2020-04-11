import React from 'react';
import {ArtistProfile} from '../../Containers/ArtistProfile/ArtistProfile';
import { shallow } from 'enzyme';

describe("Testing ArtistProfile redering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistProfile match={{url: "url"}}/>);
  });

    it('displays the header of the page', () => {
      expect(wrapper.find("#overview").text()).toContain("Overview");    
    })
 
});

describe("playArtist", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistProfile match={{url: "url"}}/>);
  });

  it("should toggle between play and pause on click", () => {
    const event = {
      preventDefault() {},
      target: { id: "play-button"}
    }
    expect(wrapper.find("button#play-button").text()).toContain("play");  
    wrapper.find("button#play-button").simulate('click', event);
    expect(wrapper.find("button#play-button").text()).toContain("pause");  
    wrapper.find("button#play-button").simulate('click', event);
    expect(wrapper.find("button#play-button").text()).toContain("play");  
  });
 
});

describe("followArtist", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistProfile match={{url: "url"}}/>);
  });

  it("should toggle between follow and unfollow on click", () => {
    const event = {
      preventDefault() {},
      target: { id: "follow-button"}
    }
    expect(wrapper.find("button#follow-button").text()).toContain("follow");  
    wrapper.find("button#follow-button").simulate('click', event);
    expect(wrapper.find("button#follow-button").text()).toContain("unfollow");  
    wrapper.find("button#follow-button").simulate('click', event);
    expect(wrapper.find("button#follow-button").text()).toContain("follow");  
  });
 
});