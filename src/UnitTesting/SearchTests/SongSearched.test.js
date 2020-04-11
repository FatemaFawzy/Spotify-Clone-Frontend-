//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME

import React from "react";
import {shallow, configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {SongSearched} from "../../Components/SearchComponents/SongSearched";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("SongSearched test", ()=>{


  //RENDER TESTS

  it('should ensure that the wrapping div is rendered correctly', () => {
    const wrapper = shallow(<SongSearched />);
    expect(wrapper.find('div.song-searched-class')).toHaveLength(1);
  });

  //FUNCTION TESTS

  it('should test the play/pause button', () => {
    const wrapper = shallow(<SongSearched />);
    expect(wrapper.state('playing')).toBe(false);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('playing')).toBe(true);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('playing')).toBe(false);
  });

  
  it('should test the drop down button', () => {
    const wrapper = shallow(<SongSearched />);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state('dropContentClass')).toBe("dropdown-content-show");
    expect(wrapper.state('songSearchedIdActive')).toBe("song-searched-active");
  });
})