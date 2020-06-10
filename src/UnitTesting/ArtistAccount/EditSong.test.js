//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {EditSong} from "../../Containers/ArtistAccount/EditSong";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 




describe("EditSong Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<EditSong /> ); 
  });

  
  it("Should have 1 button", ()=>{
    const buttons=wrapper.find("button");
    expect(buttons).toHaveLength(1);
  })
  
  it("Should have 2 inputs", ()=>{
    const inputs=wrapper.find("input");
    expect(inputs).toHaveLength(2);
  })
})

 
  describe("EditSong handleName function test", ()=>{
    it('Song Name handle on change check', () => {
      const wrapper = shallow(<EditSong /> );
      const input = wrapper.find('input#basic-url1');
      const event ={
        preventDefault(){},
        target: {value:'Song Name'}
      };
      input.simulate('change',event);
     expect(wrapper.state().Name).toContain("Song Name");
    });
})
  


describe("EditSong handleImage function test", ()=>{
  it('Song Image handle on change check', () => {
    const wrapper = shallow(<EditSong /> );
    const input = wrapper.find('input#basic-url2');
    const event ={
      preventDefault(){},
      target: {value:'http://example.com/image'}
    };
    input.simulate('change',event);
   expect(wrapper.state().Image).toContain("http://example.com/image");
  });


  describe("Edit Songs componentDidMount test", ()=>{
  
    it('calls componentDidMount', () => {
      jest.spyOn(EditSong.prototype, 'componentDidMount')
      const wrapper = shallow(<EditSong />)
      expect(EditSong.prototype.componentDidMount.mock.calls.length).toBe(1)
    })

  })

})
   
    
  

  


