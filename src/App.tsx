import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Details from "./components/Details";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route  path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
