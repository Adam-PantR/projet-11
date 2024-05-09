import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserTransaction from "../../container/UserTransactions";
import { logoutSuccess } from "../../script/login";
import { useSelector, connect } from "react-redux";

function UserPage() {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const [userName, setUserName] = useState(""); // Utilisation de useState

  // Utiliser useSelector pour obtenir formData
  const formData = useSelector((state) => state.auth.formData);

  async function getUserPage(formData, token) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const user = await response.json();

    if (user.body && user.body.userName) {
      setUserName(user.body.userName);
    } else {
      console.error("La réponse JSON ne contient pas de propriété 'userName'");
    }

    console.log("user : ", user);
    return user;
  }

  getUserPage(formData, token);

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
          <Link className="main-nav-item" to="/" onClick={logoutSuccess}>
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
});

export default connect(mapStateToProps)(UserPage);
