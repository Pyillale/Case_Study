import React from "react";
import "./App.css";
import Login from './components/Login/Login';

import Profile from './components/Profile/Profile';
import Editprofile from "./components/Profile/Editprofile";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return ( 
  // const user = null;
    // <>{
    // ! user ? (<Login/>)
    // :(
      <Router >
   <Switch>
   <Route exact path="/" >
   <Login/>
     </Route>

     <Route exact path="/Home" >
     <Home/>
     </Route>

     <Route exact path="/Profile" >
     <Profile/>
     </Route>
     
     <Route exact path="/Editprofile" >
     <Editprofile/>
     </Route>
     
     </Switch>
     </Router>
  )
}
// </>
//   ) ;
// }
export default App;
