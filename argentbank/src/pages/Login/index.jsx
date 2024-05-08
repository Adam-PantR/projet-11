import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../script/login";

function Login({ loginUser, isAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginData = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Il faut ajouter un email");
      return;
    }
    if (password === "") {
      alert("Il faut ajouter un mot de passe");
      return;
    }

    const formData = {
      password,
      email,
    };
    try {
      await loginUser(formData, navigate);
    } catch (error) {
      console.error("Erreur lors de la connexion:", error.message);
      alert("Email ou Mot de passe incorrect");
    }
  };

  return (
    <div className="min-height">
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
          <Link className="main-nav-item" to="/Signup">
            <i className="fa fa-user-circle"></i>
            Sign up
          </Link>
        </div>
      </nav>
      <main className="main bg-dark-main ">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Email</label>
              <input type="text" id="username" onChange={handleEmailChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" onClick={loginData}>
              Sign In
            </button>
          </form>
          {isAuthenticated ? <div>Log out</div> : <div>Log in</div>}
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
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
