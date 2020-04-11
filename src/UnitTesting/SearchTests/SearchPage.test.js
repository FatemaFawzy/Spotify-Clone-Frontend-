//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST


//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, mount,configure, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import SearchPage from "../../Components/SearchComponents/SearchPage";

//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("SearchPage test", ()=>{




  //RENDERING TESTS

  it("Should test to see if the search bar is rendered correctly ", ()=>{
    const wrapper = shallow(<SearchPage />);
    const searchField= wrapper.find("Searchbar");
    expect(searchField).toHaveLength(1);
  })



  //FUNCTION TESTS

  // it("Should test OnSearchChange function ", ()=>{
  //   const wrapper = shallow(<SearchPage />);
  //   const searchField= wrapper.find("input");
  //   searchField.simulate('change', { target: { value: "something" } });
  //   expect(searchField.value()).toEqual("something")
  // })

  // it('should test OnSearchChange', () => {
  //   const wrapper = shallow(<SearchPage />);
  //   const instance = wrapper.instance();
  //   expect(instance.state.searchfield).toBe("");
  //   instance.OnSearchChange(event);
  //   expect(instance.state.searchfield).toBe("something");
  // });



  // it('should test OnSearchChange', () => {
  //   const wrapper = shallow(<SearchPage />);
  //   expect(wrapper.state('searchfield')).toBe("");
  //   wrapper.find('Searchbar').simulate('change', { target: { value: "something" } });
  //   expect(wrapper.state('searchfield')).toBe("something");
  // });

  it('should test OnSearchFocus', () => {
    const wrapper = shallow(<SearchPage />);
    const instance = wrapper.instance();
    expect(instance.state.searchFocused).toBe(false);
    instance.OnSearchFocus();
    expect(instance.state.searchFocused).toBe(true);
  });

  it('should test OnCancelSearch', () => {
    const wrapper = shallow(<SearchPage />);
    const instance = wrapper.instance();
    instance.OnCancelSearch();
    expect(instance.state.searchFocused).toBe(true);
    expect(instance.state.searchfield).toBe("");
  });

  it('should test OnSearchBlur', () => {
    const wrapper = shallow(<SearchPage />);
    const instance = wrapper.instance();
    instance.OnSearchBlur();
    expect(instance.state.searchFocused).toBe(false);
  });



})