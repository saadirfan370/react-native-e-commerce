import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite,
    },
    upperRow:{
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        top:SIZES.xxLarge,
        zIndex:999,
        width:SIZES.width -44
    },
    image:{
        // aspectRatio:1,
        width:"100%",
        height:350,
        resizeMode:"cover",
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium,
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width,
    },
    cartbtn:{
        width:SIZES.width * 0.7,
        backgroundColor:COLORS.black,
        padding:SIZES.small / 2,
        borderRadius:SIZES.large,
        marginLeft:12
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width -44,
        top:20
    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width -10,
        top:5
    },
    rating:{
        top:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginHorizontal:SIZES.large,
    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
    },
    cartTitle:{
        marginLeft:SIZES.small,
        fontFamily:"bold",
        fontSize:SIZES.medium-2,
        color:COLORS.lightWhite
    },
    pricewrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large
    },
    price:{
        marginHorizontal:10,
        fontFamily:"semibold",
        fontSize:SIZES.large,
    },
    ratingText:{
        color:COLORS.gray,
        fontFamily:"medium",
        paddingHorizontal:SIZES.xSmall
        // marginHorizontal:5
    },
    descriptionWraper:{
        marginTop:SIZES.large * 2,
        marginHorizontal:SIZES.large
    },
    description:{
        fontFamily:"medium",
        fontSize:SIZES.large -2,
    },
    descText:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        textAlign:"justify",
        marginBottom:SIZES.small
    },
    location:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:COLORS.secondary,
        padding:5,
        borderRadius:SIZES.large,
        marginHorizontal:12,
    },
    addCrt:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:'center',
        justifyContent:"center",
    },
    loadingContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center"
    },
})

export default styles;