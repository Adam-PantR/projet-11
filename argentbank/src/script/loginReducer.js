const initialState = {
  isAuthenticated: false,
  formData: {
    email: '',
    password: '',
  },
  error: null,
userData: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN':
          return {
              ...state,
              isAuthenticated: true,
          };
      case 'LOGOUT':
          return {
              ...state,
              isAuthenticated: false,
          };
      case 'UPDATE_FORM_DATA':
          return {
              ...state,
              formData: action.payload,
          };
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

export default loginReducer;