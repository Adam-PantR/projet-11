const initialState = {
  isAuthenticated: false,
  redirectTo : null,
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
      default:
          return state;
  }
};

export default loginReducer;