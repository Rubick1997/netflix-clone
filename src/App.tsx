import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Details from "./components/Details";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/details/:media_type/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
