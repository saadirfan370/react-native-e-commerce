

export const addToCardReducer = (state = {} , action) =>{
    switch(action.type){
        case "ADD_TO_CART_REQUEST":
            return{loading:true};
        case "ADD_TO_CART_SUCCESS":
            return{
                loading:false,
                data:action.payload
            };
        case "ADD_TO_CART_FAIL":
            return{
                loading:false,
                error: action.payload,
            };
        case "ADD_TO_CART_REST":
            return{};
        default:
            return state;
    }
};