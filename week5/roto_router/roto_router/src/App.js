import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Register from './components/register/register'
// import NotFound from './components/NotFound/NotFound'


function App() {
  return (
    <div className="App">
      
      
      <Navbar />    
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/register' component={Register} />

              {/* <Route path='/*' component={NotFound} /> */}
          
      </Switch>
    </div>
  );
}

export default App;
