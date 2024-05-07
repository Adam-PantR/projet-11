import React from "react";
import { Link } from "react-router-dom";
import UserTransaction from "../../container/UserTransactions";

function UserPage() {
  return (
    <div class="min-height">
      <nav class="main-nav">
        <Link class="main-nav-logo" to="/Home">
          <img
            class="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link class="main-nav-item" to="/user">
            <i class="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link class="main-nav-item" to="/">
            <i class="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
      <UserTransaction />
      <footer class="footer">
        <p class="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}

export default UserPage;
