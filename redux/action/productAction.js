import axios from "axios";


export const productAction = () => async(dispatch) =>{
    dispatch({type:"PRODUCT_LOAD_REQUEST"});
    try {
        const {data} = await  axios.get('http://192.168.100.34:3000/api/products')

        dispatch({
            type:"PRODUCT_LOAD_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"PRODUCT_LOAD_FAIL",
            payload:error.response.data.error
        })
    }
}