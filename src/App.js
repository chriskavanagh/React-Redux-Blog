import React, { useEffect, useState, Fragment } from "react";
import "./App.css";
import store from "./store";
import { getCurrentUser } from "./services/AuthService";
//import { Provider } from "react-redux";
import Posts from "./components/Posts";
import AppNavbar from "./components/AppNavbar";
import { loadUser } from "./actions/authActions";
//import jwtDecode from "jwt-decode";
//import { connect } from "react-redux";
//import { Container } from "reactstrap";
//import { Route, Redirect, Switch } from "react-router-dom";

function App(props) {
  const [currentUser, setcurrentUser] = useState("");
  useEffect(() => {
    const user = getCurrentUser();
    setcurrentUser(user);
  }, []);

  return (
    <Fragment>
      <AppNavbar user={currentUser} />
      <div className="App">
        <Posts user={currentUser} />
      </div>
    </Fragment>
  );
}

/* const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.error
}); */

export default App;
/* export default connect(
  mapStateToProps,
  null
)(App); */
