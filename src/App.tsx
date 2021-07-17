import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Details from "./screens/Details";
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./components/NavBar";
import Login from "./screens/Login";

function App() {
  const user = null;

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route path="/details/:media_type/:id" component={Details} />
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
