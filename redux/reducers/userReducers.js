export const useReducerSignIn = (state = {}, action) => {
    switch (action.type) {
      case 'USER_SIGNIN_REQUEST':
        return { loading: true, userInfo: null};
      case 'USER_SIGNIN_SUCCESS':
        return {
          loading: false,
          userInfo: action.payload,
        };
      case 'USER_SIGNIN_FAIL':
        return {
          loading: false,
          userInfo: null,
          error: action.payload,
        };
      case 'USER_SIGNIN_RESET':
        return {};
  
      default:
        return state;
    }
  };
  



  export const useReducerSignUP = (state = {}, action) => {
    switch (action.type) {
      case 'USER_SIGNUP_REQUEST':
        return { loading: true, userInfo: null};
      case 'USER_SIGNUP_SUCCESS':
        return {
          loading: false,
          userInfo: action.payload,
        };
      case 'USER_SIGNUP_FAIL':
        return {
          loading: false,
          userInfo: null,
          error: action.payload,
        };
      case 'USER_SIGNUP_RESET':
        return {};
  
      default:
        return state;
    }
  };
  

  //user profile
export const userReducerProfile = (state = { user: null }, action) => {
  switch (action.type) {
      case 'USER_LOAD_REQUEST':
          return { loading: true, user: null }
      case 'USER_LOAD_SUCCESS':
          return {
              loading: false,
              user: action.payload.user,
          }
      case 'USER_LOAD_FAIL':
          return { loading: false, user: null, error: action.payload }
      case 'USER_LOAD_RESET':
          return {}
      default:
          return state;
  }

}


  //user profile
  export const LogoutReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGOUT_REQUEST':
            return { loading: true}
        case 'USER_LOGOUT_SUCCESS':
            return {
                loading: false,
                user: action.payload,
            }
        case 'USER_LOGOUT_FAIL':
            return { loading: false, user: null, error: action.payload }
        case 'USER_LOGOUT_RESET':
            return {}
        default:
            return state;
    }
  
  }