import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './Components/Homepage'
import UserDashboard from './Components/UserDashboard'
import VendorDashboard from './Components/VendorDashboard'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import './App.css'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/userDashboard" component={UserDashboard} />
                <Route path="/vendorDashboard" component={VendorDashboard} />
              
            </Switch>
        </Router>
    );
}

export default App;


