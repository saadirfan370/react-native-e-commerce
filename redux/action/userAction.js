import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toast } from "react-toastify";

export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: 'USER_SIGNIN_REQUEST' });
    try {
      const { data } = await axios.post(`http://192.168.100.34:3000/api/user/signin`, user);
      // const token1 =  JSON.stringify(data)
      await AsyncStorage.setItem("userInfo", data.token);

      dispatch({
        type: 'USER_SIGNIN_SUCCESS',
        payload: data,
      });
      toast.success("Login Successfully!");
    } catch (error) {
      dispatch({
        type: 'USER_SIGNIN_FAIL',
        payload: error.response.data.error,
      });
      toast.error(error.response.data.error);
    }
  };



  export const userSignUPAction = (user) => async (dispatch) => {
    dispatch({ type: 'USER_SIGNUP_REQUEST' });
    try {
      const { data } = await axios.post(`http://192.168.100.34:3000/api/user/signup`, user);
  
      dispatch({
        type: 'USER_SIGNUP_SUCCESS',
        payload: data,
      });
    //   toast.success("Login Successfully!");
    } catch (error) {
      dispatch({
        type: 'USER_SIGNUP_FAIL',
        payload: error.response.data.error,
      });
    //   toast.error(error.response.data.error);
    }
  };



  //user profile action
export const userProfileAction = () => async (dispatch) => {
  dispatch({ type: 'USER_LOAD_REQUEST' });
 
  try {
      const { data } = await axios.get("http://192.168.100.34:3000/api/user/me", {
        headers: {
          "Content-Type": "application/json",
          cookies:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmNlMzE1Nzk0ZWVlNTJiNzk4YTBiMSIsImlhdCI6MTY5MDI3NTcwOSwiZXhwIjoxNjkwMjc5MzA5fQ.vujogAjm_Rhj8-mYm7lM28fz2PbvC3U7ERm2SmEmqL8"},
      });
      dispatch({
          type: 'USER_LOAD_SUCCESS',
          payload: data
      });

  } catch (error) {
      dispatch({
          type: 'USER_LOAD_FAIL',
          payload: error.response.data.error
      });
  }
}


export const ActionLogOut = () => async (dispatch) => {
  dispatch({ type: 'USER_LOGOUT_REQUEST' });
  try {
      const { data } = await axios.get("http://192.168.100.34:3000/api/user/logout")
      await AsyncStorage.removeItem("userInfo");
      dispatch({
          type: 'USER_LOGOUT_SUCCESS',
          payload: data
      });

  } catch (error) {
      dispatch({
          type: 'USER_LOGOUT_FAIL',
          payload: error.response.data.error
      });
  }
}