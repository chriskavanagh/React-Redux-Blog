import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// check token / load user
export function loadUser() {
  return async function(dispatch, getState) {
    dispatch({ type: USER_LOADING });
    try {
      const { data } = axios.get("/api/users/me", tokenConfig(getState));
      dispatch({ type: USER_LOADED, payload: data });
    } catch (err) {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({ type: LOGIN_FAIL });
    }
  };
}

// Logout User
export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}

// Setup config/headers and token
export function tokenConfig(getState) {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
}
