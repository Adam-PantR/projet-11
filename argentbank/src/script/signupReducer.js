const initialState = {
    error: null,
    userData: null
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                userData: action.payload,
                error: null
            };
        case 'SIGN_UP_FAILURE':
            return {
                ...state,
                userData: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default signupReducer;