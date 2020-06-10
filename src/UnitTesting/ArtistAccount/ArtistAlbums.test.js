//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import {ArtistAlbums} from "../../Containers/ArtistAccount/ArtistAlbums";

 //CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 




describe("ArtistAlbums Render test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<ArtistAlbums /> ); 
  });

  
  it("Should have 1 button", ()=>{
    const buttons=wrapper.find("button");
    expect(buttons).toHaveLength(1);
  })
  
  it("Should have 1 table", ()=>{
    const tables=wrapper.find("table");
    expect(tables).toHaveLength(1);
  })

  it("Should have 1 header", ()=>{
    const headers=wrapper.find("h1");
    expect(headers).toHaveLength(1);
  })
})

 
  describe("deleteAlbum function test", ()=>{
    it('Delete Album state check', () => {
      const wrapper = shallow(<ArtistAlbums /> );
      const button =wrapper.find("a#delete");
      button.simulate('click');
     expect(wrapper.state().Deleted).toEqual(true);
    });

    describe("Artist Albums componentDidMount test", ()=>{
  
      it('calls componentDidMount', () => {
        jest.spyOn(ArtistAlbums.prototype, 'componentDidMount')
        const wrapper = shallow(<ArtistAlbums />)
        expect(ArtistAlbums.prototype.componentDidMount.mock.calls.length).toBe(1)
      })
  
    })

})
  



   
    
  

  


