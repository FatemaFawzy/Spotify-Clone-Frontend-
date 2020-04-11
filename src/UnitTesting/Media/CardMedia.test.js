import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});


import CardMedia from "../../Components/Media/CardMedia";

describe("Card Media test", ()=>{

  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<CardMedia/> ); 
  });

  describe("Component rendering", () => {   
  it("Should have an image", ()=>{
    const image= wrapper.find("img");
    expect(image).toHaveLength(1);
  })
  it("Should render the wrpper div correctly", ()=>{
    const wrapperdiv= wrapper.find("div.play-pause");
    expect(wrapperdiv).toHaveLength(1);
  })
})

describe("Testing functions", () => {   
  it('should test the play/pause button', () => {
    const wrapper = shallow(<CardMedia />);
    expect(wrapper.state('playing')).toBe(false);
    wrapper.find('div.middle div').at(0).simulate('click');
    expect(wrapper.state('playing')).toBe(true);
    wrapper.find('div.middle div').at(0).simulate('click');
    expect(wrapper.state('playing')).toBe(false);
  })
})
});

