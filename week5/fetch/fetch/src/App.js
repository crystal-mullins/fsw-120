import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Profile from "./Components/Profile"
import Info from "./Components/Info"
import Settings from "./Components/Settings"
import ServicesList from "./Components/ServiceList"
import ServiceDetail from "./Components/ServiceDetail"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            


            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/profile">
                    <Profile/>
                </Route>

                <Route
                path='/components/info'>
                   <Info />
                </Route>

                <Route
                path='/components/settings'> <Settings />
                </Route>
               
            <Route
                path='/profile/info'> <Info />
                </Route>
                <Route
                path='/profile/settings'> <Settings />
                </Route>

                <Route exact path="/services" >
                    <ServicesList />
                </Route>

                <Route  path="/services/:serviceIdsss" >
                    <ServiceDetail />
                </Route>
            
            
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App
