import React, { useState, useEffect } from "react";
import Transaction from "../../components/Transaction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import getUserPage from "../../pages/UserPage/index";

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
  return user;
}

function UserTransaction({ formData, token, getUserPage }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const user = await getUser(formData, token);
        setUserName(user.body.userName);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du mail de l'utilisateur:",
          error
        );
      }
    };
    fetchUserEmail();
  }, []);

  const userData = async (e) => {
    e.preventDefault();
    try {
      await userSettings(token, userName);
      await getUserPage(token, userName);
    } catch (error) {
      console.error(
        "Erreur lors du changement de nom d'utilisateur:",
        error.message
      );
    }
  };

  async function userSettings(token, userName) {
    console.log(userName + "  " + token);
    if (userName === setUserName || userName === "") {
      alert("Il faut ajouter un email");
      return;
    } else {
      try {
        const url = "http://localhost:3001/api/v1/user/profile";
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName }),
        });
        if (!response.ok) {
          throw new Error("Erreur lors de la mise à jour de l'utilisateur");
        }
        const data = await response.json();
        console.log(data);
        alert("Le UserName a bien été modifié");
        window.location.reload();
        return data;
      } catch (error) {
        console.error(
          "Erreur lors de la mise à jour de l'utilisateur:",
          error.message
        );
        throw error;
      }
    }
  }

  const openModal = () => {
    const hiddenForm = document.querySelector(".hidden-form");
    hiddenForm.style.display = "block";
    const editButton = document.querySelector(".edit-button");
    editButton.style.display = "none";
    const closeEditButton = document.querySelector(".close-edit-button");
    closeEditButton.style.display = "block";
  };

  const closeModal = () => {
    const hiddenForm = document.querySelector(".hidden-form");
    hiddenForm.style.display = "none";
    const editButton = document.querySelector(".edit-button");
    editButton.style.display = "block";
    const closeEditButton = document.querySelector(".close-edit-button");
    closeEditButton.style.display = "none";
  };

  return (
    <main className="main bg-dark-main">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName}
        </h1>
        <button
          className="edit-button"
          // onClick={() => userSettings(token, userName)}
          onClick={openModal}
        >
          Edit Name
        </button>
        <button
          className="close-edit-button"
          // onClick={() => userSettings(token, userName)}
          onClick={closeModal}
        >
          Close Edit Name
        </button>
        <form className="hidden-form">
          <div className="input-wrapper-user">
            <label htmlFor="username">Nouvel UserName</label>
            <input type="text" id="username" onChange={handleUserNameChange} />
          </div>
          <button className="sign-in-button-user" onClick={userData}>
            Modifier le Username
          </button>
        </form>
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
