import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transaction from "../../components/Transaction";
import { connect } from "react-redux";

export const updateFormData = (formData) => {
  return {
    type: "UPDATE_FORM_DATA",
    payload: formData,
  };
};

function UserTransaction({ formData }) {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        setUserEmail(data.email);
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
    <main class="main bg-dark-main">
      <div class="header">
        <h1>
          Welcome back
          <br />
          {userEmail}
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
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
