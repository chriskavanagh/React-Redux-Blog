//import React from "react";
import React, { useEffect } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
//import store from "./store";
//import PostForm from "./components/PostForm";
import AppNavbar from "./components/AppNavbar";
//import { Container } from "reactstrap";
import { loadUser } from "./actions/authActions";
//import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  useEffect(() => store.dispatch(loadUser()));
  return (
    <Provider store={store}>
      <AppNavbar />
      <div className="App">
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
