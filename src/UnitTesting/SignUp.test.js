import React from 'react';
import SignUp from '../Containers/SignUp';
import { shallow } from 'enzyme';

// 1. Test suite
describe("[UNIT] Testing the SignUp component", () => {
  let wrapper

  // 2. A Jest setup helper function  
  beforeEach(() => {
    // 3. Enzyme's shallow rendering
    wrapper = shallow(<SignUp/>)
  })

  describe("Component redering", () => {    
    // 4. Our unit test, checking if the initial value is 0
    it('displays the header of the page', () => {
      expect(wrapper.find("h2").text()).toContain("Sign up with your email address")    
    })
  })

  
//   it("check formValidity", () => {
//     // wrapper.find("button").simulate("click")
//     // expect(wrapper.find("h1").text()).toContain("1")

//  })
})

