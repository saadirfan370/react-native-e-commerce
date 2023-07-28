import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const addTOCartAction = (order) => async (dispatch) => {
  dispatch({ type: "ADD_TO_CART_REQUEST" });

  try {
    const { data } = await axios.post(
      "http://192.168.100.34:3000/api/order/orderHistory",
      order,
      {
        headers: {
          "Content-Type": "application/json",
          cookies:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmNlMzE1Nzk0ZWVlNTJiNzk4YTBiMSIsImlhdCI6MTY5MDI3NTcwOSwiZXhwIjoxNjkwMjc5MzA5fQ.vujogAjm_Rhj8-mYm7lM28fz2PbvC3U7ERm2SmEmqL8", // Include the token in the cookies
        },
      }
    );
    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TO_CART_FAIL",
      payload: error.response.data.error,
    });
  }
};


export const delTOCartAction = (uuid) => async (dispatch) => {
  dispatch({ type: "DELETE_TO_CART_REQUEST" });
  const token =await AsyncStorage.getItem("userInfo")
  console.log(token,'token2');
  try {
    const { data } = await axios.get(
      `http://192.168.100.34:3000/api/order/orderHistorydel/${uuid}`,
      {
        headers: {
          "Content-Type": "application/json",
          cookies: token
        },
      }
    );
    dispatch({
      type: "DELETE_TO_CART_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TO_CART_FAIL",
      payload: error.response.data.error,
    });
  }
};
