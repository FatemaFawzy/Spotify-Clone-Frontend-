//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {AddAlbum} from "../../Containers/ArtistAccount/AddAlbum";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 




describe("AddAlbum Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<AddAlbum /> ); 
  });

  
  it("Should have 1 button", ()=>{
    const buttons=wrapper.find("button");
    expect(buttons).toHaveLength(1);
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

  describe("AddAlbum ValidateAlbumName function test", ()=>{
  
    it('Album Name input Empty check', () => {
      const wrapper = shallow(<AddAlbum /> );
      wrapper.setState({Name:''});
      const button = wrapper.find('button#submit');
      button.simulate('click');
      const message=wrapper.find('p#error-message1');
      expect(message.text()).toContain("Please enter the album's name");
    });

 
 
})
  describe("AddAlbum handleName function test", ()=>{
    it('Name handle on change check', () => {
      const wrapper = shallow(<AddAlbum /> );
      const input = wrapper.find('input#basic-url1');
      const event ={
        preventDefault(){},
        target: {value:'Album Name'}
      };
      input.simulate('change',event);
     expect(wrapper.state().Name).toContain("Album Name");
    });
})
  
it('Album Image input Empty check', () => {
  const wrapper = shallow(<AddAlbum /> );
  wrapper.setState({Image:''});
  const button = wrapper.find('button#submit');
  button.simulate('click');
  const message=wrapper.find('p#error-message2');
  expect(message.text()).toContain("Please enter the image's url");
});

 
 

  describe("AddAlbum handleImage function test", ()=>{
    it('Image url handle on change check', () => {
      const wrapper = shallow(<AddAlbum /> );
      const input = wrapper.find('input#basic-url2');
      const event ={
        preventDefault(){},
        target: {value:'http://example.com/image'}
      };
      input.simulate('change',event);
     expect(wrapper.state().Image).toContain("http://example.com/imag");
    });


})