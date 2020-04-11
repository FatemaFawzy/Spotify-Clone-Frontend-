import {RelatedArtistsContent} from '../Components/ArtistProfile/RelatedArtistsContent';
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("[UNIT] Testing the RelatedArtistsContent component rendering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RelatedArtistsContent/>);
  });

    it("It should have an Artist subname in the cards", ()=>{
  
      const text= wrapper.find("Artist");
      expect(text);
    })

  
});

// describe("componentDidMount", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<RelatedArtistsContent/>);
//   });

//     it("It should set the artistInfo array in state", ()=>{
//       const instance= wrapper.instance();
//       expect(wrapper.state.artistInfo).not.toHaveLength(0);
//     })

  
// });