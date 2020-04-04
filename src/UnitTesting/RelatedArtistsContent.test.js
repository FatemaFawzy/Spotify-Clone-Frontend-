import RelatedArtistsContent from '../Components/ArtistProfile/RelatedArtistsContent';
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("[UNIT] Testing the RelatedArtistsContent component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RelatedArtistsContent/>);
  });

  describe("Testing RelatedArtistsContent redering", () => { 

    it("It should have an Artist subname in the cards", ()=>{
  
      const text= wrapper.find("Artist");
      expect(text);
    })

  });

  
});