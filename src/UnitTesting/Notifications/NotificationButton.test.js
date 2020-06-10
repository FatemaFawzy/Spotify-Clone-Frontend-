//NOTE THAT THE FILE NAME SHOUL BE MyComponent.test.js whare MyComponent IS THE NAME OF THE COMPONENT YOU WANNA TEST

//BASIC INPORTS AND CONFIGURATIONS MADE EACH TIME
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

//IMPORT THE COMPONENT YOU WANNA TEST
import NotificationButton from "../../Components/Notifications/NotificationBtn/NotficationButton";


describe("test for NotificationButton", () => {

  let wrapper;
// beforeEach(() => {
//  wrapper = shallow(<NotificationButton/> );
// });
it('Should have a link', () => {

  wrapper = shallow(<NotificationButton/> );
  expect(wrapper.find("Link")).toHaveLength(1);

});

});
