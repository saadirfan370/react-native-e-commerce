import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        width:182,
        height:240,
        marginEnd:5,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary,
        position:"relative",
    },
    imageContainer:{
        flex:1,
        width:170,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:"hidden"
    },
    image:{
        // aspectRatio:1,
        resizeMode:"cover",
        height:"100%",
        width:"100%"
    },
    details:{
        padding:SIZES.small
    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
        marginBottom:-3
    },
    supplier:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        marginBottom:-1,
        color:COLORS.gray,
    },
    price:{
        fontFamily:"bold",
        fontSize:SIZES.medium,
        marginBottom:-1
    },
    addbtn:{
        position:"absolute",
        bottom:SIZES.xSmall,
        right:SIZES.xSmall,
        zIndex:999
    }

})
export default styles;