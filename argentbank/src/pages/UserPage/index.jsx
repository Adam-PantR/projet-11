import React from "react";
import { Link, useParams } from "react-router-dom";
import UserTransaction from "../../container/UserTransactions";
import { logoutSuccess } from "../../script/login";

function UserPage() {
  const { email, password } = useParams();
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
            {email}
          </Link>
          <Link className="main-nav-item" to="/" onClick={logoutSuccess()}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
      <UserTransaction />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}

export default UserPage;
