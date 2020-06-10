//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import NotificationHistory from "../../Components/NotificationHistory/NotificationHistory";





describe("test for NotificationHistory", () => {

  let wrapper;
beforeEach(() => {
 wrapper = shallow(<NotificationHistory/> );
});
it('Should have one link', () => {
//   wrapper.setState({
//     searchfield:'fr'
//   }); 
// wrapper=wrapper.update();

// expect(wrapper.containsAnyMatchingElements([
// <SearchBoxNotificationHist searchChange='fr'/>])).toEqual(true);

  const link=wrapper.find("Link");
  expect(link).toHaveLength(1);

});

});
