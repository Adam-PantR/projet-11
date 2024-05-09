import Features from "../../container/Features";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutSuccess } from "../../script/login";

function Home({ isAuthenticated }) {
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="../img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="main-nav-item">
          {isAuthenticated ? (
            <div>
              <i className="fa fa-user-circle"></i>
              <Link to="/user">Profile</Link>
              <Link to="/" onClick={logoutSuccess()}>
                Log out
              </Link>
            </div>
          ) : (
            <div>
              <i className="fa fa-user-circle"></i>
              <Link to="/login">Log in</Link>
            </div>
          )}
        </div>
      </nav>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </div>
        </section>
        <Features />
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
  logoutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
