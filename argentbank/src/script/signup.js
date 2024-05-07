export const signUpUser = (formData) => {
    return async (dispatch) => {
        try {
            const url = "http://localhost:3001/api/v1/user/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Erreur lors du transfert");
            }

            const data = await response.json();
            dispatch(signUpSuccess(data));
        } catch (error) {
            console.error('Erreur lors du fetch:', error.message); // Ajout du console.error
            dispatch(signUpFailure(error.message));
        }
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