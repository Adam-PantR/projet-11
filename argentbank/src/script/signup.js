export const signUpUser = (formData, navigate) => {
    return (dispatch) => {
        const url = "http://localhost:3001/api/v1/user/signup";
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
            dispatch(signUpSuccess(data)); 
            navigate("/login"); 
          })
          .catch (error => {
            console.error('Erreur lors du fetch:', error.message); 
            dispatch(signUpFailure(error.message));
          });
    };
};



export const signUpSuccess = (userData) => ({
    type: 'SIGN_UP_SUCCESS',
    payload: userData
});

export const signUpFailure = (error) => ({
    type: 'SIGN_UP_FAILURE',
    payload: error
});