import { useNavigate } from "react-router-dom";

export const loginUser = async (formData, navigate) => { 
  return async (dispatch) => {
    try {
        const url = "http://localhost:3001/api/v1/user/login";
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
        console.log('test');
        dispatch(loginSuccess()); 
        navigate("/home");
        
    } catch (error) {
        // alert('email ou mot de passe incorect')
        console.error('Erreur lors du fetch:', error.message); 
        dispatch(loginFailure(error.message))
        alert("Email ou Mot de passe incorrect")
    }
  };
};

export const loginSuccess = () => ({
  type: 'LOGIN',
});

export const logoutSuccess = () => ({
  type: 'LOGOUT',
});

export const loginFailure = () => ({
  type: 'LOG IN FAILED',
});