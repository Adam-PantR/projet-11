export const loginUser = (formData, navigate) => { 

  return (dispatch) => {
    const url = "http://localhost:3001/api/v1/user/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors du transfert");
      }
      return response.json();
    })
    .then(data => {
      const token = data.body.token;
      dispatch(loginSuccess({ token }));
      navigate(`/user?token=${token}`);  
    })
    .catch(error => {
      console.error('Erreur lors du fetch:', error.message); 
      dispatch(loginFailure(error.message));
      alert("Email ou Mot de passe incorrect");
    });
  };
};

export const loginSuccess = (userData) => ({
  type: 'LOGIN',
  payload: userData
});

export const logoutSuccess = () => ({
  type: 'LOGOUT',
});

export const loginFailure = () => ({
  type: 'LOG IN FAILED',
});