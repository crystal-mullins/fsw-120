import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppProps from './Scrimba/wk_five/AppProps'
import AppToggle from './Scrimba/wk_five/AppToggle'
import AppState from './Scrimba/wk_five/AppState'
import AppStateTwo from './Scrimba/wk_five/AppStateTwo'
// import TodoItem from './item1';
// import TodoItem2 from './item2';
// import TodoItem3 from './item3';
// import TodoItem4 from './item4';


ReactDOM.render(
  <React.StrictMode>
    {/* <TodoItem />
    <TodoItem2 />
    <TodoItem3 />
    <TodoItem4/> */}
    <AppStateTwo />
    <AppProps />
    <AppToggle />
    <AppState />
  </React.StrictMode>,
  document.getElementById('root')
);


