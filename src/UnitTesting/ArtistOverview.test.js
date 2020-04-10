import React from 'react';
import {ArtistOverviewContent} from '../Components/ArtistProfile/ArtistOverviewContent';
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("Testing ArtistOverviewContent redering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistOverviewContent/>);
  });

  it('displays the header of the page', () => {
    expect(wrapper.find("#popular-h1").text()).toContain("Popular");    
  });

});

describe("showMoreAlbums", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistOverviewContent/>);
  });

  it("should toggle between SHOW MORE and SHOW LESS on click", () => {
    expect(wrapper.find("button#show-more-album-btn").text()).toContain("SHOW MORE");  
    wrapper.find("button#show-more-album-btn").simulate('click');
    expect(wrapper.find("button#show-more-album-btn").text()).toContain("SHOW LESS"); 
    wrapper.find("button#show-more-album-btn").simulate('click');
    expect(wrapper.find("button#show-more-album-btn").text()).toContain("SHOW MORE"); 
  });

  it("should toggle between up arrow icon and down arrow icon", () => {
    expect(wrapper.find("i#albums-arrow.fas.fa-chevron-down"));  
    wrapper.find("button#show-more-album-btn").simulate('click');
    expect(wrapper.find("i#albums-arrow.fas.fa-chevron-up"));  
    wrapper.find("button#show-more-album-btn").simulate('click');
    expect(wrapper.find("i#albums-arrow.fas.fa-chevron-down")); 
  });

})

describe("showMoreSingles", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistOverviewContent/>);
  });

  it("should toggle between SHOW MORE and SHOW LESS on click", () => {
    expect(wrapper.find("button.btn.show-more").at(1).text()).toContain("SHOW MORE");  
    wrapper.find("button.btn.show-more").at(1).simulate('click');
    expect(wrapper.find("button.btn.show-more").at(1).text()).toContain("SHOW LESS"); 
    wrapper.find("button.btn.show-more").at(1).simulate('click');
    expect(wrapper.find("button.btn.show-more").at(1).text()).toContain("SHOW MORE"); 
  });

  it("should toggle between up arrow icon and down arrow icon", () => {
    expect(wrapper.find("i#albums-arrow.fas.fa-chevron-down"));  
    wrapper.find("button#show-more-album-btn").simulate('click');
    expect(wrapper.find("i#albums-arrow.fas.fa-chevron-up"));  
    wrapper.find("button#show-more-album-btn").simulate('click');
    expect(wrapper.find("i#albums-arrow.fas.fa-chevron-down")); 
  });

})