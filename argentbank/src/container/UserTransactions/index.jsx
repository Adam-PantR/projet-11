import React, { useState, useEffect } from "react";
import Transaction from "../../components/Transaction";
import { connect } from "react-redux";

export const updateFormData = (formData) => {
  return {
    type: "UPDATE_FORM_DATA",
    payload: formData,
  };
};

async function getUser(formData, token) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const user = await response.json();
  console.log("user : ", user);
  return user;
}

function UserTransaction({ formData, token }) {
  const [userName, setUserName] = useState("");
  console.log("token récupéré : ", token);

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const user = await getUser(formData, token);
        setUserName(user.body.userName); // Accédez à user.body.email pour obtenir l'e-mail de l'utilisateur
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du mail de l'utilisateur:",
          error
        );
      }
    };
    fetchUserEmail();
  }, []);

  return (
    <main className="main bg-dark-main">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Transaction
        title="Argent Bank Checking (x8349)"
        amount="$2,082,72"
        description="Available Balance"
      />
      <Transaction
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Transaction
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

const mapStateToProps = (state) => ({
  formData: state.auth.formData,
});

export default connect(mapStateToProps)(UserTransaction);
