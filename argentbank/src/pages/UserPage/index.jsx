import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserTransaction from "../../container/UserTransactions";
import { logoutSuccess, loginSuccess } from "../../script/login";
import { connect } from "react-redux";

function UserPage({ userName, token }) {
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
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={logoutSuccess()}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
      <UserTransaction token={token} />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  formData: state.auth.formData,
  token: state.auth.token,
  userName: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  logoutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
