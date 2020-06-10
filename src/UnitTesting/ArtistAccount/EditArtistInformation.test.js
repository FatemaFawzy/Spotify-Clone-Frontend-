//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {EditArtistInformation} from "../../Containers/ArtistAccount/EditArtistInformation";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("Edit Artist Information Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<EditArtistInformation /> ); 
  });
 
  it("Should have 1 table", ()=>{
    const table=wrapper.find("table");
    expect(table).toHaveLength(1);
  })
  
  it("Should have 1 info content", ()=>{
    const div=wrapper.find("div.info-content");
    expect(div).toHaveLength(1);
  })

  it("Should have 8 inputs", ()=>{
    const inputs=wrapper.find("input");
    expect(inputs).toHaveLength(8);
  })
})
describe("Edit Artist Information Handle Change Test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<EditArtistInformation /> ); 
  });
 
  it("Should handle change in email input field", ()=>{
    const input = wrapper.find("input#email");
    const event = {
      preventDefault() {},
      target: { value: '123' }
    };
    input.simulate("change", event)
    expect(wrapper.state().email).toEqual("123");
  })

  it("Should handle change in day input field", ()=>{
    const input = wrapper.find("input#day");
    const event = {
      preventDefault() {},
      target: { value: '12' }
    };
    input.simulate("change", event)
    expect(wrapper.state().day).toEqual("12");
  })

  it("Should handle change in month input field", ()=>{
    const input = wrapper.find("input#month");
    const event = {
      preventDefault() {},
      target: { value: '11' }
    };
    input.simulate("change", event)
    expect(wrapper.state().month).toEqual("11");
  })
  it("Should handle change in year input field", ()=>{
    const input = wrapper.find("input#year");
    const event = {
      preventDefault() {},
      target: { value: '1998' }
    };
    input.simulate("change", event)
    expect(wrapper.state().year).toEqual("1998");
  })
  it("Should handle change in username input field", ()=>{
    const input = wrapper.find("input#username");
    const event = {
      preventDefault() {},
      target: { value: 'ali' }
    };
    input.simulate("change", event)
    expect(wrapper.state().username).toEqual("ali");
  })
  it("Should handle change in name input field", ()=>{
    const input = wrapper.find("input#name");
    const event = {
      preventDefault() {},
      target: { value: 'ali' }
    };
    input.simulate("change", event)
    expect(wrapper.state().artistName).toEqual("ali");
  })
  it("Should handle change in image input field", ()=>{
    const input = wrapper.find("input#image");
    const event = {
      preventDefault() {},
      target: { value: 'hey' }
    };
    input.simulate("change", event)
    expect(wrapper.state().imageURL).toEqual("hey");
  })
  it("Should handle change in bio input field", ()=>{
    const input = wrapper.find("input#bio");
    const event = {
      preventDefault() {},
      target: { value: '1998' }
    };
    input.simulate("change", event)
    expect(wrapper.state().bio).toEqual("1998");
  })


})
describe("Edit Artist Information Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<EditArtistInformation /> ); 
  });
  it("Should validate change in email input field", ()=>{
    const input = wrapper.find("input#email");
    const event = {
      preventDefault() {},
      target: { value: 'aaa' }
    };
    input.simulate("change", event)
    expect(wrapper.state().emailError).toEqual("Please enter a valid email.");
  })
  it("Should validate change in day input field", ()=>{
    const input = wrapper.find("input#day");
    const event = {
      preventDefault() {},
      target: { value: '1000' }
    };
    input.simulate("change", event)
    expect(wrapper.state().dayError).toEqual("Please choose a valid day.");
  })
  it("Should validate change in month input field", ()=>{
    const input = wrapper.find("input#month");
    const event = {
      preventDefault() {},
      target: { value: '1000' }
    };
    input.simulate("change", event)
    expect(wrapper.state().monthError).toEqual("Please choose a valid month.");
  })
  it("Should validate change in year input field", ()=>{
    const input = wrapper.find("input#year");
    const event = {
      preventDefault() {},
      target: { value: '1000' }
    };
    input.simulate("change", event)
    expect(wrapper.state().yearError).toEqual("Please choose a valid year.");
  })
})

describe("Edit Artist Info componentDidMount test", ()=>{
  
  it('calls componentDidMount', () => {
    jest.spyOn(EditArtistInformation.prototype, 'componentDidMount')
    const wrapper = shallow(<EditArtistInformation />)
    expect(EditArtistInformation.prototype.componentDidMount.mock.calls.length).toBe(1)
  })

})
