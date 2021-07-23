import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Details from "./screens/Details";
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./components/NavBar";
import Login from "./screens/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

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
              <Route path="/profile" component={ProfileScreen} />
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
