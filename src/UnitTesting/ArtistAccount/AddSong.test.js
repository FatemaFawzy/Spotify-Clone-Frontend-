//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {AddSong} from "../../Containers/ArtistAccount/AddSong";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 




describe("AddSong Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<AddSong /> ); 
  });

  
  it("Should have 2 button", ()=>{
    const buttons=wrapper.find("button");
    expect(buttons).toHaveLength(2);
  })
  
  it("Should have 2 inputs", ()=>{
    const inputs=wrapper.find("input");
    expect(inputs).toHaveLength(2);
  })

  it("Should have 1 header", ()=>{
    const headers=wrapper.find("h1");
    expect(headers).toHaveLength(1);
  })
})

  describe("AddSong ValidateSongName function test", ()=>{
  
    it('Song Name input Empty check', () => {
      const wrapper = shallow(<AddSong /> );
      wrapper.setState({Name:''});
      const button = wrapper.find('button#submit');
      button.simulate('click');
      const message=wrapper.find('p#error-message1');
      expect(message.text()).toContain("Please enter the song's name");
    });

 
 
})
  describe("AddSong handleName function test", ()=>{
    it('Name handle on change check', () => {
      const wrapper = shallow(<AddSong /> );
      const input = wrapper.find('input#basic-url1');
      const event ={
        preventDefault(){},
        target: {value:'Song Name'}
      };
      input.simulate('change',event);
     expect(wrapper.state().Name).toContain("Song Name");
    });
})
  
it('Song Image input Empty check', () => {
  const wrapper = shallow(<AddSong /> );
  wrapper.setState({Image:''});
  const button = wrapper.find('button#submit');
  button.simulate('click');
  const message=wrapper.find('p#error-message2');
  expect(message.text()).toContain("Please enter the image's url");
});

 
 

  describe("AddSong handleImage function test", ()=>{
    it('Image url handle on change check', () => {
      const wrapper = shallow(<AddSong /> );
      const input = wrapper.find('input#basic-url2');
      const event ={
        preventDefault(){},
        target: {value:'http://example.com/image'}
      };
      input.simulate('change',event);
     expect(wrapper.state().Image).toContain("http://example.com/imag");
    });


})
describe("AddSong ValidateSongName function test", ()=>{
  
  it('Song Name input Empty check', () => {
    const wrapper = shallow(<AddSong /> );
    wrapper.setState({Name:''});
    const button = wrapper.find('button#submit2');
    button.simulate('click');
    const message=wrapper.find('p#error-message1');
    expect(message.text()).toContain("Please enter the song's name");
  });
})

describe("AddSong ValidateSongName function test", ()=>{
  
  it('Song Name input Empty check', () => {
    const wrapper = shallow(<AddSong /> );
    wrapper.setState({Name:''});
    const button = wrapper.find('button#submit2');
    button.simulate('click');
    const message=wrapper.find('p#error-message1');
    expect(message.text()).toContain("Please enter the song's name");
  });
})