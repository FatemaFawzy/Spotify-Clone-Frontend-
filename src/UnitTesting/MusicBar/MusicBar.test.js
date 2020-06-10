import React from 'react';
import { MusicBar } from '../../Components/MusicBar/MusicBar';
import { shallow } from 'enzyme';

describe("Testing MusicBar redering", () => {
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<MusicBar /> ); 
  });

  it("Should have 1 image", ()=>{
    const images=wrapper.find("img");
    expect(images).toHaveLength(1);
  })
});

describe("Testing LikeSong function", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MusicBar/>);
  });

  it("shouldn't toggle the icon unless the request is sent", () => {
    const event = {
      preventDefault() {},
      target: { id: "heart-button"}
    }
    expect(wrapper.find('#heart-button').hasClass('far fa-heart')).toEqual(true);
    wrapper.find("#heart-button").simulate('click', event);
    expect(wrapper.find('#heart-button').hasClass('far fa-heart')).toEqual(true); 

  });
});

// describe("Testing PlayPause function", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<MusicBar/>);
//   });

//   it("should toggle the play and pause icons on click", () => {
//     const event = {
//       preventDefault() {},
//       target: { id: "play-track-bar"}
//     }
//     // expect(wrapper.find("#heart-button")).toHaveClass("far fa-heart");  
//     expect(wrapper.find('#play-track-bar').hasClass('fa-play-circle')).toEqual(true);
//     wrapper.find("#play-track-bar").simulate('click', event);
//     expect(wrapper.find('#play-track-bar').hasClass('fa-pause-circle')).toEqual(true); 

//   });
// });

describe("Testing muteVolume function", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MusicBar/>);
  });

  it("should toggle the volume icon on click", () => {
    const event = {
      preventDefault() {},
      target: { id: "volume-button"}
    }
    expect(wrapper.find('#volume-button').hasClass('fa-volume-up')).toEqual(true);
    wrapper.find("#volume-button").simulate('click', event);
    expect(wrapper.find('#volume-button').hasClass('fa-volume-mute')).toEqual(true); 

  });
});


describe("Testing changeVolume function", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MusicBar/>);
  });

  it("should change the mute state variable on click", () => {
    const event = {
      preventDefault() {},
      target: { id: "progress_volumebar"}
    }
    wrapper.setState({muted: true});
    expect(wrapper.state().muted).toEqual(true);
    wrapper.find("#progress_volumebar").simulate('click', event);
    expect(wrapper.state().muted).toEqual(false);

  });
});


describe("Testing playQueue function", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MusicBar/>);
  });

  it("should change the playQueue state variable on click", () => {
    const event = {
      preventDefault() {},
      target: { id: "play_Queue"}
    }
    expect(wrapper.state().playQueue).toEqual(false);
    wrapper.find("#play_Queue").simulate('click', event);
    expect(wrapper.state().playQueue).toEqual(true);

  });
});

// describe("Testing stop function", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<MusicBar/>);
//   });

//   it("should set the audio's current time to 0 on click", () => {
//     const event = {
//       preventDefault() {},
//       target: { id: "stop_btn"}
//     }
//     wrapper.find("#stop_btn").simulate('click', event);
//     expect(wrapper.find('#curr_time').innerHTML).toEqual("00:00"); 

//   });
// });