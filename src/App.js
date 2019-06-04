import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
//import store from "./store";
import PostForm from "./components/PostForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
