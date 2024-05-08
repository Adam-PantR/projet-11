import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUpUser } from "../../script/signup";

function SignUp({ signUpUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [lastName, setLastname] = useState("");
  const [firstName, setFirstname] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  const signUpData = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Il faut ajouter un email");
      return;
    }
    if (password === "") {
      alert("Il faut ajouter un mot de passe");
      return;
    }
    if (userName === "") {
      alert("Il faut ajouter un nom d'utilisateur");
      return;
    }
    if (firstName === "") {
      alert("Il faut ajouter un prénom");
      return;
    }
    if (lastName === "") {
      alert("Il faut ajouter un nom");
      return;
    }

    const formData = {
      email,
      password,
      firstName,
      lastName,
      userName,
    };
    console.log(formData);
    signUpUser(formData);
  };
  return (
    <div class="min-height">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/Login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <main className="main bg-dark-main ">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign Up</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Email</label>
              <input type="text" id="email" onChange={handleEmailChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={handleUserNameChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">First Name</label>
              <input
                type="text"
                id="firstname"
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Last Name</label>
              <input
                type="text"
                id="lastname"
                onChange={handleLastNameChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" onClick={signUpData}>
              Sign Up
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {
  signUpUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
