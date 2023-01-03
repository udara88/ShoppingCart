import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items




// redux stuff

import {createStore}  from 'redux'
import { DECREASE,INCREASE } from "./action";
import reducer  from "./reducer";
import { Provider } from "react-redux";




const store =  createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer  />
    </Provider>
  );
}
console.log(store.getState());
export default App;
