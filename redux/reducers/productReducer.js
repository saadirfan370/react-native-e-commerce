

export const productReducer = (state = {products:[]},action) =>{
    switch(action.type){
        case "PRODUCT_LOAD_REQUEST":
            return{loading:true};
        case "PRODUCT_LOAD_SUCCESS":
            return{
                loading:false,
                product:action.payload
            };
        case "PRODUCT_LOAD_FAIL":
            return{
                loading:false,
                products:null,
                error: action.payload,
            };
        case "PRODUCT_LOAD_REST":
            return{};
        default:
            return state;
    }
};