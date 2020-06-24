import React from 'react';
import Success from '@/Components/ForgotPassword/Success';
import { shallow } from 'enzyme';

// 1. Test suite
describe("[UNIT] Testing Success component", () => {
  let wrapper

  // 2. A Jest setup helper function  
  beforeEach(() => {
    // 3. Enzyme's shallow rendering
    wrapper = shallow(<Success/>)
  })

  it('should display a message confirming email', () => {
    expect(wrapper.find("p.text-center").text()).toContain("A message has been sent to you by email with a link to reset your current password.")    
  })
})

