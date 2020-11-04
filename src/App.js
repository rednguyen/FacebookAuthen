//import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/Auth";
import Home from "./routes/Home";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SignUp";

//import './App.css';
//import TeamMembers from './components/TeamMembers.js';
//import DisplayData from './components/DisplayData.js'

//class App extends React.Component{
//render(){
//return (
//<div>
//<TeamMembers />
//<DisplayData />
//</div>
//);
//}
//}
function App(){
    return (
        <AuthProvider>
            <Router>
                <div>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
