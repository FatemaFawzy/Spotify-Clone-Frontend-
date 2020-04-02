import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import React from "react";
import { withRouter } from 'react-router-dom'
export let forwardStack = [];
export let backwardStack = [];
export let currentURL = '/Webplayer/HomePage';


// this also works with react-router-native

// const Button = withRouter(({ history }) => (
//   <button
//     type='button'
//     onClick={() => { history.push('/new-location') }}
//   >
//     Click Me!
//   </button>
// ))
// function App() {
//   let history = useHistory();
// }

export function addNewURL(url) {
  if (currentURL) {
      backwardStack.push(currentURL);
  }
  currentURL = url;
};

export function goBackward() {
  if (!backwardStack.length) {
     
    return;
  }
  forwardStack.push(currentURL);
  currentURL = backwardStack.pop();
  console.log(currentURL); 
  
  // this.history.push("'"+ currentURL + "'"); 
  // return <Redirect to={"'"+currentURL+"'"} />
}

export function goForward() {
  if (!forwardStack.length) {
      return;
  }

  backwardStack.push(currentURL);
  currentURL = forwardStack.pop();
}