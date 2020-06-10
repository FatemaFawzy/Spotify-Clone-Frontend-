import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./Store/reducer";
import {loadState , saveState } from "./Store/localStorage";


const persistedState = loadState();

const store = createStore(reducer, persistedState );
store.subscribe( () =>{
  saveState(store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
