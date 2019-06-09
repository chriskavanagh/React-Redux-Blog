import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
//import store from "./store";
//import PostForm from "./components/PostForm";
import AppNavbar from "./components/AppNavbar";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
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
