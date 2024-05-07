import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUpUser } from "../../script/signup";

function SignUp({ signUpUser }) {
  function signupData() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;

    if (email === "") {
      alert("Il faut ajouter un email");
      return;
    }
    if (username === "") {
      alert("Il  faut ajouter un username");
      return;
    }
    if (password === "") {
      alert("Il faut ajouter mot de passe");
      return;
    }
    if (firstname === "") {
      alert("Il faut ajouter prenom");
      return;
    }
    if (lastname === "") {
      alert("Il faut ajouter un nom");
      return;
    }
    const formData = {
      email,
      password,
      firstName: firstname,
      lastName: lastname,
      userName: username,
    };
    // Envoie des informations en POST
    console.log(formData);
    signUpUser(formData);
  }
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
              <input type="text" id="email" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">First Name</label>
              <input type="text" id="firstname" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Last Name</label>
              <input type="text" id="lastname" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" onClick={signupData}>
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

const mapDispatchToProps = {
  signUpUser,
};

export default connect(null, mapDispatchToProps)(SignUp);
