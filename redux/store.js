import { createStore,applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './reducers/productReducer';
import { DelToCardReducer, addToCardReducer } from './reducers/addToCartReducer';
import { LogoutReducer, useReducerSignIn, useReducerSignUP, userReducerProfile } from './reducers/userReducers';
import AsyncStorage from "@react-native-async-storage/async-storage";



const reducer = combineReducers({
    product:productReducer,
    addTOCart:addToCardReducer,
    signIn:useReducerSignIn,
    signUP:useReducerSignUP,
    profile:userReducerProfile,
    logout:LogoutReducer,
    deleteCart:DelToCardReducer,
})

const getInitialUserInfo = async () => {
    try {
        const userInfoString = await AsyncStorage.getItem('userInfo');
        return userInfoString ? userInfoString : null;
    } catch (error) {
        console.log("Error fetching userInfo from AsyncStorage:", error);
        return null;
    }
};


let initialState = {
    signIn: {
        userInfo: getInitialUserInfo()
    }
};


const middleware=[thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;