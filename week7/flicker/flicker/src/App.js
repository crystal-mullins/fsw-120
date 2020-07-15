import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import FlickersList from './Components/Flickers'
import Login from './Components/Login'

const App = () => {

  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/tweets' component={FlickersList} />
      </Switch>

    </div>
  );
}

export default App