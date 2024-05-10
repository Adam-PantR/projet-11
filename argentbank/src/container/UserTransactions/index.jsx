import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Transaction from "../../components/Transaction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const updateFormData = (formData) => {
  return {
    type: "UPDATE_FORM_DATA",
    payload: formData,
  };
};

export const userNameUpdate = (userName) => ({
  type: "UPDATE_USERNAME",
  payload: userName,
});

async function getUser(formData, token, dispatch) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const user = await response.json();
  dispatch(userNameUpdate(user.body.userName));
  return user;
}

function UserTransaction({ formData, token, user, dispatch }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const user = await getUser(formData, token, dispatch);
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
    } catch (error) {
      console.error(
        "Erreur lors du changement de nom d'utilisateur:",
        error.message
      );
    }
  };

  const userReset = () => {
    setUserName(user);
  };

  async function userSettings(token, userName) {
    if (!userName || userName === "") {
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
        dispatch(userNameUpdate(userName));
        alert("Le UserName a bien été modifié");
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

  const cancelModal = () => {
    const hiddenForm = document.querySelector(".hidden-form");
    hiddenForm.style.display = "none";
    const editButton = document.querySelector(".edit-button");
    editButton.style.display = "block";
    const closeEditButton = document.querySelector(".close-edit-button");
    closeEditButton.style.display = "none";
    alert("Modifications annulées");
    userReset(); // Utiliser la fonction userReset sans paramètres
  };

  return (
    <main className="main bg-dark-main">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName}
        </h1>
        <button className="edit-button" onClick={openModal}>
          Edit Name
        </button>
        <button className="close-edit-button" onClick={closeModal}>
          Close Edit Name
        </button>
        <form className="hidden-form">
          <div className="input-wrapper-user">
            <label htmlFor="username">Nouvel UserName</label>
            <input type="text" id="username" onChange={handleUserNameChange} />
          </div>
          <div className="div-modal">
            <button className="sign-in-button-user" onClick={userData}>
              Modifier le Username
            </button>
            <div className="cancel-button-user" onClick={cancelModal}>
              Annuler
            </div>
          </div>
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
  user: state.auth.user,
  token: state.auth.token,
});

export default connect(mapStateToProps)(UserTransaction);
