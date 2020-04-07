import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import API from "./utils/API";
import Profile from "./pages/updateUser"

function App() {

  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
