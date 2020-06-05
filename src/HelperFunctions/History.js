

export let forwardStack = [];
export let backwardStack = [];
export let currentURL = '';


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

//function to format the time refrenced from stackoverflow
export function formatTime(s) {
  if (!s && s !== 0) {
    return '00:00';
  }

  var total_seconds = Math.floor(s);
  var hours = Math.floor(total_seconds / 3600);
  var minutes = Math.floor(total_seconds / 60) - hours * 60;
  var seconds = total_seconds - minutes * 60 - hours * 3600;

  if (hours) {
    return hours + ':' + format2Number(minutes) + ':' + format2Number(seconds);
  }

  return format2Number(minutes) + ':' + format2Number(seconds);
}
function format2Number(num) {
  var str = num + '';
  if (str.length === 1) {
    return '0' + str;
  }
  if (str.length === 0) {
    return '00';
  }
  return str;
}


export function progressOffset(element) {
  var offset = 0;
  while (element && element !== document) {
    offset += element.offsetLeft;
    element = element.offsetParent;
  }
  return offset;
}