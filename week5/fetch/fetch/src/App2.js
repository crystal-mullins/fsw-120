import React from "react"
import Header from "./Components/Header"
import Home from "./Components/Home"
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
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route path="/services/:serviceId" >
                    <ServiceDetail />
                </Route>
            </Switch>
        </div>
    )
}

export default App