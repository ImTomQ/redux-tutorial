import React from "react";
import Counter from "./Counter";
import { createStore } from 'redux';

const initialState = {
  name: 'TOM',
  count: 10
}

function reducer(state, action) {
  console.log('Reducer', state, action);
  switch (action.type) {
    case "DECREASE":
      return {...state, count: state.count - 1};
    case "INCREASE":
      return {...state, count: state.count + 1};
    case "RESET":
      return {...state, count: 0};
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

store.dispatch({type: "DECREASE"});
store.dispatch({type: "DECREASE"});
store.dispatch({type: "DECREASE"});

console.log(store.getState());

const App = () => {

  

  return(
    <Counter state={store.getState()} />
  )
};

export default App;