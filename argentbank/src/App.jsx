import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";

export const importToken = (token) => {
  return {
    type: "UPDATE_FORM_DATA",
    payload: token,
  };
};

function App({ token }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={token ? <UserPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(App);
